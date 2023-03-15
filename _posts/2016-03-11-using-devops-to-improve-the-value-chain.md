---
author: SeanFromIT
comments: "true"
date: 2016-03-11 05:48:37+00:00
layout: post
link: https://feeney.mba/2016/03/11/using-devops-to-improve-the-value-chain/
slug: using-devops-to-improve-the-value-chain
title: Using DevOps to Improve the Value Chain
wordpress_id: 654
categories:
- buzzwords
- DevOps
- Good Business Practices
---

**DevOps returns focus to the business value of software and systems**. So it makes sense that step one of your DevOps journey should be modeling your organization's software engineering value stream.

![A simple value stream map for a product](http://ptgmedia.pearsoncmg.com/images/chap5_9780321601919/elementLinks/fig5_1.jpg)

_A simple value stream map for a product, from [Continuous Delivery by Humble, Farley & Fowler](http://www.amazon.com/gp/product/0321601912/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0321601912&linkCode=as2&tag=ufoundergroun-20&linkId=EYWFNX4NKOL2KV6V)._

Once modeled, it's time to optimize by reducing non-value-added activities everywhere your business is comfortable in doing so. This is done best not just at the technology layer (by adding pipeline orchestration and other CI/CD tools), but at the business layer. The feedback loop spans both layers: how quickly can your company move from concept to cash<sup>1</sup>? This is a question of organizational agility, not just agile technology methodologies. The creative destruction underpinning our economic system ensures that a more nimble start-up will come along and beat you at your own game if you're too slow to embrace change.

_[The Phoenix Project](http://www.amazon.com/gp/product/0988262509/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0988262509&linkCode=as2&tag=ufoundergroun-20&linkId=6OVNB4ODBB4Z73QI)_ is required reading for technology consulting managers at Accenture. It's a novelized explanation of Goldratt's Theory of Constraints. In order to increase organizational agility, you must identify and alleviate constraints (the slowest point, or bottleneck, in the value chain). This shouldn't surprise any MBA, because it historically tracks back to the work of Deming in optimizing supply chains. And DevOps involves treating your [deployment pipeline as a supply chain]({{ site.baseurl }}/a-primer-on-continuous-delivery.html).


> "...any improvement not made at the constraint is an illusion. If you fix something before the constraint you end up with more work piled up in front of the constraint. If you fix something after the constraint you will always be starved for work."
> -*Phoenix* Author [Gene Kim](http://blog.delphix.com/kyle/2014/theory-constraints/)


Thus, the first step in improving cycle time, in improving your company's value chain, is identifying the top constraint and addressing it. Then you rinse and repeat, addressing the next constraint. But this can be a challenge for most enterprises. At some point the constraints move beyond the technology layer and bleed into the business layer.

DevOps is as much a culture change as it is a technology change. The business has to be willing to embrace [IT as a strategic asset]({{ site.baseurl }}/it-strategic-asset-or-cost-center.html) if the transformation is to be successful. In regulated environments, it also takes significant leadership buy-in to challenge the status quo and automate the various gates the regulation requires.

Tactically, agile practitioners often use the scrum model to focus teams on sprint goals and utilize the scrum master to break down barriers to delivering value. However most companies adopting this model get far too into daily stand-ups. In theory they're great - the handful of people with tasks in the sprint collaborate daily on their progress and use it as a time to escalate blocking issues to the scrum master. In reality, it's an invitation for unhealthy traditional practices like micromanagement. More people show up to the stand-up than necessary. Rather than ongoing collaboration and escalation of issues, time is wasted ("Oh I'll just ask that team about it in the stand-up"). The most useful person who can solve the day's blocking issue doesn't show up.

([See more ways companies fail at scrum](https://hackernoon.com/youre-doing-scrum-wrong-and-here-s-how-to-fix-it-6d45fdd26721))

**Arguably the most non-value-added activity: Meetings**

There are better ways. [Dropbox](http://www.inc.com/rebecca-hinds-and-bob-sutton/dropbox-secret-for-saving-time-in-meetings.html), acknowledging work by Stanford University<sup>2</sup>, wiped out recurring meetings in 2013 (of which, a daily is probably the worst). In 2009, VC and Y Combinator founder Paul Graham proposed the idea of [Maker's Schedules](http://www.paulgraham.com/makersschedule.html). Start-ups like [Spring](http://www.nytimes.com/2016/02/28/magazine/meet-is-murder.html) have made this idea real, enforcing, at a minimum, four-hour stretches without meetings for all makers (DevOps professionals) weekly.

Ditching regular meetings does not mean ditching collaboration. Quite the opposite. It leads to smaller, as-needed, purpose-driven meetings. For colocated teams, it can lead to more face-to-face interaction as coworkers go directly to each other's offices for information or help. And for all teams, including geographically distributed, it encourages continuous collaboration. [Under Armour](http://www.nytimes.com/2016/02/28/magazine/meet-is-murder.html) has eliminated nearly all in-person meetings by using [Slack](https://slack.com/), which enables asynchronous or synchronous persistent communication while allowing each user granular control over when and how they are contacted. The persistent nature of the chat lets workers catch up on their own schedule, making it a great fit for today's increasingly flexible and remote workforce.

See also: [Halt & Goto Meeting](https://bhilburn.org/fixing-the-workplace-schedule/)



* * *






 	
  1. Phrase coined by the Poppendiecks in [_Implementing Lean Software Development: From Concept to Cash_](http://www.amazon.com/gp/product/0321437381/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0321437381&linkCode=as2&tag=ufoundergroun-20&linkId=ZRWEA7NJG7LXFCTL)

 	
  2. [_Scaling Up Excellence_ by Sutton & Rao](http://www.amazon.com/gp/product/0385347022/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0385347022&linkCode=as2&tag=ufoundergroun-20&linkId=S3UXJDCQCSUPCIJ2)


