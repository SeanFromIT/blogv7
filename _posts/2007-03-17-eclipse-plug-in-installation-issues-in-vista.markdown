---
author: SeanFromIT
comments: true
date: 2007-03-17 03:17:00+00:00
layout: post
link: https://feeney.mba/2007/03/17/eclipse-plug-in-installation-issues-in-vista/
slug: eclipse-plug-in-installation-issues-in-vista
title: Eclipse Plug-in Installation Issues in Vista
wordpress_id: 310
categories:
- Eclipse
- Windows Vista
---

After installing Eclipse on my new Windows Vista installation, I saw that Krugle [finally came out with a beta of their Eclipse plug-in](http://corp.krugle.com/eclipse-beta/1y6uL) so I wanted to install it. At step two (Selecting Help > Software Updates > Find and Install) my Eclipse threw the following error:  
  


<blockquote>Error: "Requested operation cannot be performed because it would invalidate the  
current configuration. See details for more information."  
  
Details: "Platform configuration has been modified outside this program. A  
restart is recommended".</blockquote>

  
  
(This is identical to the error thrown in [this](https://www.eclipse.org/bugs/show_bug.cgi?format=multiple&id=56655) Eclipse bug report for Windows 2000, but their solution did not help Vista any.)  
  
Setting the Compatibility mode of Eclipse to "Run as Administrator" solved this problem.
