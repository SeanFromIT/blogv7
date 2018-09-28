---
author: SeanFromIT
comments: true
date: 2007-04-13 11:43:00+00:00
layout: post
link: https://feeney.mba/2007/04/13/steam-in-vista/
slug: steam-in-vista
title: Steam in Vista
wordpress_id: 298
categories:
- Steam
- Windows Vista
---

I FINALLY FIGURED IT OUT! After months of not being able to play my favorite game, Counter-Strike: Source, because Steam would not run after installing Vista, I finally found the settings tweak the allowed Steam to run properly.  
  
Background on the problem: After installing just fine, Steam opens and starts updating to about 62% and then errors out saying that there is another instance of the program running, when there isn't.  
  
Adjusting any and all settings in the Vista program Compatibility tab (including "Run as Administrator") did not help. It would just cause the program to error out with a Runtime error before even opening.  
  
Solution: There is a second "Run as Administrator" option that is not connected to the Compatibility tab "Run as Administrator" option. This option is apparently stronger, giving the program actual Administrative rights in memory, and can be found on the Shortcut tab in Vista. Click on Advanced, and check the "Run as Administrator" option. Steam will now run properly in Vista.
