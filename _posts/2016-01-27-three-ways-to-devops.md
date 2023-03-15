---
author: SeanFromIT
comments: "true"
date: 2016-01-27 17:32:10+00:00
layout: post
link: https://feeney.mba/2016/01/27/three-ways-to-devops/
slug: three-ways-to-devops
title: Three Ways to DevOps
wordpress_id: 509
categories:
- DevOps
- Good Business Practices
- Infrastructure
---

In the beginning, there were silos. Development teams wanted to only focus on software, so once code was deemed working they would chuck it "over the wall" to Operations teams and deflect any blame for deployment delays. "It worked in the development environment" was the mantra.

Now we have [DevOps]({{ site.baseurl }}/defining-devops.html). The two teams have converged into one, in terms of roles. But as an IT manager, how do you actually implement this new model? [Aaron Kenny](http://aaronkenny.com/blog/3-models-for-devops/) has defined a few models that I will build on below.

**The [Full Stack Engineer]({{ site.baseurl }}/what-is-a-full-stack-engineer.html) Model:** This model works well for start-ups (Kenny refers to it as the "One-Man-Band Model"), where the limited number of employees necessitates the wearing of several hats. Each engineer strives to be an expert in both the software engineering and infrastructure engineering. Since infrastructure-as-code is the norm now, it isn't as far of a leap as it once was to actually see this model successful in the marketplace. Even large companies like Amazon find success in this model, by [forcing small teams](http://blog.idonethis.com/two-pizza-team/) and treating each new product like a start-up with the product owner acting as CEO.

**The Embedded Model:** As the number of product teams and the organization grows, it tends to make sense to have team members start specializing. Employee skill sets are naturally divergent, and some may want to dive deep on infrastructure, some on tooling, some on testing, etc. The key to success in this model is to have the same manager, or product owner, overseeing both sides of the DevOps equation and aligning their goals. Everyone should still generally know what each other is working on and something about each of the various specialties.

**The Center of Excellence (CoE) Model:** This approach seems to bridge the gap for enterprises currently dealing with silos. You take the best and brightest from your various Ops teams (sysadmin, network, security, etc.), merge with any platform and architecture leaders from the Dev org, and set them loose on creating the standards and procedures that you envision needing to make your DevOps transformation a success. For example, this CoE would be responsible for creating the hardened golden images each product team could build upon to script the installations of their environment prerequisites and software. But their focus should be more strategic than tactical. They should manage the knowledge transfer wiki with how-to guides for your configuration management tool of choice, coding conventions for each language, etc. They should also act as owners of the IT Service Catalog, releasing new offerings to it as they confirm related best practices. As DevOps permeates the organization's culture, the embedded model will begin to make sense. The CoE experts can then be embedded into product teams as specialists, and the CoE can become a virtual team. This is the path [SAS](https://youtu.be/iLIOemi3wTg?t=21m13s) has taken, calling it (and internally funding it as) internal consulting. Even the US Federal Government has realized the benefits, forming [18F](https://18f.gsa.gov/) inside the GAO, as has the UK's 320-year-old [Aviva](http://www.yorkshirepost.co.uk/news/exclusive-aviva-to-launch-digital-garage-in-london-for-new-agile-world-1-6870098) Insurance.
