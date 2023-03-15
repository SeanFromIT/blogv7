---
author: SeanFromIT
comments: "true"
date: 2007-10-26 02:40:00+00:00
layout: post
link: https://feeney.mba/2007/10/26/missing-display-adapter-in-device-manager/
slug: missing-display-adapter-in-device-manager
title: Missing Display Adapter in Device Manager
wordpress_id: 230
categories:
- drivers
- video cards
- Windows XP
---

After an upgrade of XP, you may notice the Display Adapter category missing from Device Manager completely. Scans by Add/Remove Hardware find no video cards, and the install program for your video card complains that it either can't find a compatible card or that your existing "standard" driver has a problem.  
  
Cause: Chipset drivers were screwed up by the upgrade.  
Solution: Re-install chipset drivers. In my case, the latest VIA 4 in 1 driver from my motherboard manufacturer's website.
