---
author: SeanFromIT
comments: "true"
date: 2007-03-24 18:17:00+00:00
layout: post
link: https://feeney.mba/2007/03/24/last-fm-qcd-scrobbler-in-vista/
slug: last-fm-qcd-scrobbler-in-vista
title: Last.fm QCD Scrobbler in Vista
wordpress_id: 301
categories:
- QCD
- Windows Vista
---

If you're using the Audioscrobbler (Last.fm) plug-in for Quintessential Player (QCD) in Vista, you will have to run the program as an Administrator (Go to compatibility tab in link Properties and check that box). The log that the plug-in uses to upload stats to Last.fm is located in a location that only Administrators can see (probably some temp folder). If you do not run it as Administrator, your stats will not be uploaded even though it says it is "online".
