---
date: 2023-08-11T01:03:15.958Z
title: Why does your build pipeline fail even though there no changes?
description: Common causes of CI/CD pipeline failures
comments: true
categories:
  - Software Engineering
  - DevOps
  - Development Platforms
  - CI/CD
layout: post
---

> I didn't change anything! Why is my pipeline failing!?

is a common cry of the average developer. It is often said that 80% of tech failures are due to changes<sup>\[[source](https://wikisummaries.org/visible-ops/ "source")\]</sup>. CI/CD pipelines are particularly tricky, lending themselves towards [dependency rot](https://en.wikipedia.org/wiki/Software_rot "dependency rot") if not actively updated and maintained. Pipeline runs can fail for a variety of reasons. Let's look at the top five most common failures, and what you can do about it.

1. **You actually did change something** - hence why you're running the pipeline. The most common cause of pipeline failures are your software code. I know, it hurts, but that's all you changed, right?

   * What you can do about it: Test the failing pipeline step locally to see if you can replicate the issue. You may need to add verbosity, print statements, etc. until you find the exact line(s) of code responsible.
   
2. **You didn't bring your dependencies in-house and/or pin their versions**. The next most common cause of unexpected pipeline failure is poor dependency management. Many enterprises were caught off guard in 2016 when a little-known open-source npm package, left-pad, was removed from the npm registry by its author. "Most programmers had never heard of left-pad, but now, somehow, their code couldn't run without it."<sup>\[[source](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code "source")\]</sup> React and numerous other popular packages could no longer build. They were all bit by this same issue you're now running into!

   * What you can do about it:
     * Never reference a public repo in your private pipeline. Nothing should ever be directly downloaded over the public Internet during your pipeline run. Instead, leverage a binary repository (e.g. GitHub Packages, Artifactory, or Nexus) that can proxy your external dependencies and cache them within your network. In addition to avoiding issues like left-pad in public repos, and Internet connection or firewall failures, this can increase security as common public packages are often targeted with malware, and the binary repositories can scan them and build SBOMs with them.
     
     * Never use "latest." I know, this can be tempting. I always want my dependencies to be up to date, and "latest" is how you get there, right? Unfortunately, this can lead to unexpected and breaking changes. There is no commonly agreed-upon definition of what a minor and major upgrade is, and there's no guarantee that future versions will offer the same functionality - with the same interface - as the current version. You need to fully test each version upgrade, preferably one dependency at a time, and the middle of your software change isn't necessarily the best time to do so. Prevent the unexpected by pinning to a specific version of your dependency.
     
3. **Patching - or not patching - your base image**. Modern CI/CD pipelines run each step in its own container, passing only the filesystem and environmental variables along from step to step. Whether you realize it or not, you're choosing the operating system (OS), patch level, and configuration of that container and it can suffer from the same pinned version issues as mentioned above. Alpine was a popular lightweight container in the early days of containers, but it was thin because it shed some lessons hard learned by other Linux OS. Older Alpine versions can suffer from network bugs in certain environments - even if previous runs didn't encounter issues! This is but one example of many OS issues that can creep in over the course of time.

   * What you can do about it: Pay close attention to your base image choices - and any layers you add to them - and regularly update them for security and operational reasons. Once per month is a good cadence. Fully test your pipeline after updating the image(s), even if you don't have a scheduled software release. Look for keywords in your pipeline(s) like `image:`, `FROM`, or `container:` to determine what image(s) you're using.
   
4. **Trusting shared actions, workflows, or jobs**. Some CI/CD software have marketplaces where you can find one-liners that you can add to your pipeline and it seems like magic happens. These are abstractions, and they do make your pipeline look cleaner. But they can suffer from the issues mentioned above, with no SLA of when, if ever, an issue encountered might be fixed as [open-source authors do not owe you support](https://gist.github.com/richhickey/1563cddea1002958f96e7ba9519972d9).

   * What you can do about it: Balance your usage of these shared components with the amount of time you can allot to building out your pipeline, realizing that any time saved upfront may be lost later if and when a blocking issue occurs. Where possible, pin to a specific version and download its source code into your own network in case the author chooses to delete it or radically change it in the future. Most importantly, seek to understand what the abstraction is doing for you - even if only at a high level - so that you can troubleshoot it when the time comes.
   
5. **Not configuring your build tools properly**. As the layers of virtualization and the number of tools increases, so does the number of configuration switches you may have to set for each. As mentioned earlier, each step in your pipeline runs in its own container. That container can have OS settings that need to be tuned. If you use a JVM-hosted language, you've definitely got some settings to optimize there. If you use a compiled language, that compiler is going to have some settings. Each package manager you use may have some necessary settings (at the very least, to point to and prioritize your private repo). ARM is growing in popularity, so you may have to target it, or alternatively specify that you want x86 (or some other vendor-specific architecture). And that's not even getting into all the potential test tools you may have!

   * What you can do about it: Accepting the default settings is okay, until it's not. Just because your build worked with them in the past doesn't mean it will always work with them. More code, more build and test tools, more performance challenges. New security tooling or patching stealing more CPU time from the runner VM. Some of that can be out of your control. But tuning every part of your pipeline to its fullest is within your control, and if you still encounter resource issues, consider leveraging a larger runner.