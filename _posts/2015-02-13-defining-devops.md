---
author: SeanFromIT
comments: "true"
date: 2015-02-13T22:44:47.000+00:00
layout: post
link: https://feeney.mba/2015/02/13/defining-devops/
slug: defining-devops
title: Defining DevOps
wordpress_id: "424"
categories:
- agile
- amazon
- cxo
- Development Platforms
- DevOps
- Good Business Practices
- Infrastructure
- linux
- open source
- software engineering
- sys admin
- web development
- Web Workers
post_format:
- Video

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/o7-IuYS0iSE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

> "DevOps isn’t a team. CI/CD isn’t a group in JIRA. DevOps is a _way of thinking_." -[Carlos Nunez, ThoughtWorks](https://carlosonunez.wordpress.com/2017/03/02/getting-into-devops/)

DevOps = Culture + Practices + Tools
(Often expressed as People > Process > Tools, a la [Agile Manifesto](http://agilemanifesto.org/))

<blockquote>"By 2015, DevOps will evolve from a niche strategy employed by large cloud providers into a mainstream strategy employed by 20% of Global 2000 organizations." -Gartner</blockquote>

DevOps is an IT methodology that acknowledges the interdependence of software engineering and infrastructure operations. In alignment with expanding cloud adoption, DevOps returns focus to the [business value]({{ site.baseurl }}/using-devops-to-improve-the-value-chain.html) of software and systems rather than IT for IT's sake. Its goal is to increase automation across the Software Development Life Cycle (SDLC), extending agile practices to include the systems infrastructure that powers the application infrastructure. This is in contrast to many IT governance models which preach strict role separation - which lead to communications breakdown and delays as software moves from one deployment phase to another. To support rapid delivery (often dubbed "[Continuous Delivery]({{ site.baseurl }}/a-primer-on-continuous-delivery.html)"), traditional quality assurance (QA) and security policies must be baked into the process - preferably automated. The following Venn diagram (lumping security into ops) sums it up:

![Devops]({{ site.baseurl }}/assets/img/2015/02/Devops-300x285.jpg)(cc) by [Wylve](http://commons.wikimedia.org/wiki/User:Wylve)

So depending which group your traditional role comes from, you may have a different view of DevOps.

**Development/Software Engineering:** Views DevOps as a means to speed time to market by linking agile processes to agile tooling and reducing the likelihood of infrastructure lock-in all the while increasing repeatability.

**Operations/Infrastructure and Security Teams:** Views DevOps as a means to make infrastructure more agile and resilient, making it software-defined, increasing elasticity, scalability, reliability, security and reducing on-call events, as the primary resolution to systems problems (due to software, infrastructure or security issues) becomes automated replacement rather than manual break/fix.

**Software QA:** Views DevOps as a way to increase compliance, consistency, predictability and reduce risk. The reduced risk may be counter-intuitive, but it comes from automating software testing through Continuous Integration. Traditional QA roles are the most likely to be disrupted by DevOps, as QA becomes everyone's problem, not just a specific group's. Think about what's happened in physical manufacturing industries over the past three decades - Lean Six Sigma, TQM, etc. The QA aspect of DevOps brings the best of these practices into the IT space.

<blockquote>"DevOps is the org structure that lets you release as fast as possible without losing control." -Markos Rendell, Accenture</blockquote>

DevOps is here to stay, just like agile software engineering is here to stay. The rush to the cloud is hastening its adoption. What you must decide as an organization is to what extent you will pilot and eventually adopt it. Highly regulated environments may find it harder to adopt - just as they found it harder to adopt agile software engineering. But all IT organizations as they mature towards IT-as-a-Service should consider what role agile will play, from development to production.

> "The more frequently you release code, the more important DevOps is." -Charles Gruver, Amazon Web Services

In case you're curious on typical job titles springing up for DevOps: Build and Deployment Engineer, Dev Ops Engineer, Build Systems Engineer, Systems Engineer, Release Engineer. As one company puts it, "basically you are a software engineer who cares \[about infrastructure\]." But note that not all DevOps positions include responsibility for all that DevOps can entail. A software focused role may mean building agile deployment tools without touching infrastructure, and an infrastructure focus may mean implementing agile systems administration tools and cloud systems with minimal touching of the release process. It's really the wild wild west for the fledgling DevOps role, and company size and appetite for true agile adoption will influence the day to day of a DevOps practitioner.

> "DevOps is not entirely a technology solution. It is also a fundamental shift in the way organizations structure themselves to get work done in a completely new way -- a culture shift that challenges the beliefs and assumptions that people hold true about each other, themselves, and their work." -[Chris Cancialosi, Ph.D.](https://dzone.com/articles/what-devops-is-and-is-not)

Note also that true DevOps for most enterprises means significant culture change. Silos must give way to functional reporting. Collaborative, cross-functional teams may need to be regularly formed around products or projects with equally collaborative leadership. Ticketing systems are ideally replaced by scrum masters and automation fills in the rest. Check out [Three Ways to DevOps]({{ site.baseurl }}/three-ways-to-devops.html) for the best organizational models to consider as you continue your DevOps journey.

Recommended Reading:

* [The DevOps Handbook](https://www.amazon.com/gp/product/1942788002/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1942788002&linkCode=as2&tag=ufoundergroun-20&linkId=ae5a828ceb7da09d1b4773862d4e4b22) ([quote about the origins of DevOps](https://www.goodreads.com/quotes/8470591-devops-and-its-resulting-technical-architectural-and-cultural-practices-represent))
* [What is DevOps?](https://medium.com/@cindysridharan/what-is-devops-5b0181fdb953) (an alternative venn diagram, discussion of "SREs," and a view from the outside)
* [The Mythical DevOps Engineer](https://medium.com/better-programming/the-mythical-devops-engineer-698e4da12f31) (2020 updated comparison of job descriptions) 