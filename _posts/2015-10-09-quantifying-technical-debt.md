---
author: SeanFromIT
comments: "true"
date: 2015-10-09 00:16:43+00:00
layout: post
link: https://feeney.mba/2015/10/09/quantifying-technical-debt/
slug: quantifying-technical-debt
title: Quantifying Technical Debt
wordpress_id: 495
categories:
- agile
- Bad Business Practices
- code
- cxo
- DevOps
- Good Business Practices
- Security
- software engineering
---

I've written about the concept of [technology debt]({{ site.baseurl }}/understanding-the-cost-implications-of-your-software-technology-purchase.html) before, in regards to COTS systems. But what about when you have control over the source code?

![Dilbert on Spaghetti Code](http://kriscroes.github.io/images/blog1/dilbert.png)

There are a number of Software Engineering considerations that can lead to increases of this debt.



 	
  1. Architecture & Design: Please, no [spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code).

 	
  2. Duplication: Use of [inheritance and polymorphism](https://en.wikipedia.org/wiki/Code_reuse).

 	
  3. [Coding Standards](https://en.wikipedia.org/wiki/Coding_conventions): These can differ per language and per business. Note considerations around driving down complexity.

 	
  4. Comments: Too little or too many can lead to [issues](http://www.softwarequotes.com/printableshowquotes.aspx?id=606).

 	
  5. Performance: The earlier performance is considered, the better, but note that Computer Scientists can easily and unintentionally increase complexity by optimizing code into cryptic yet efficient functions. Compiler-friendly may ultimately mean [unmaintainable in the real world](http://thedailywtf.com/articles/efficient-wtfery).

 	
  6. Security: Similar to performance, the earlier security is considered, the better. It should be baked into the process. Consider coding methodologies like [OWASP](https://www.owasp.org/index.php/OWASP_Secure_Coding_Practices_-_Quick_Reference_Guide) and [CERT](https://www.securecoding.cert.org/confluence/display/seccode/SEI+CERT+Coding+Standards) that cover input validation, error handling, access control, and logging to name a few.

 	
  7. [Unit Testing](http://docs.sonarqube.org/display/HOME/Lack+of+Unit+Tests): Step 1 on the road to automated QA. If it's hard to unit test, it may be too complex.

 	
  8. Bugs & Potential Bugs: The earlier they are found, [the less debt is incurred](http://sqa.fyicenter.com/FAQ/Why-Bugs-in-Software/Cost_to_find_bugs.html).


As you may have noticed, many of these topics influence [complexity](http://docs.sonarqube.org/display/HOME/Bad+Distribution+of+Complexity). It should be no surprise that the more complex the program, the more technical debt it's likely to have. Best practice is to balance each driver of technical debt to the extent dictated by the software project at hand (which is constrained by the resources allocated to it and the deadlines demanded of it). More code, faster - the mantra of Continuous Delivery - is useless if it results garbage code. Use of a code analysis tool like [SonarCube](http://docs.sonarqube.org/display/HOME/Developers'+Seven+Deadly+Sins) can assist in quantifying technical debt. You also get the added benefit of automated [Quality Gates](http://www.sonarqube.org/quality-gates-shall-your-projects-pass/) to encourage your developers to perform the balancing act.

<a title="Monkey User on Tech Debt" target="_blank" href="https://www.monkeyuser.com/2018/tech-debt/"><img style="width:50%;" alt="Monkey User on Tech Debt" src="https://www.monkeyuser.com/assets/images/2018/106-tech-debt.png" /></a>

