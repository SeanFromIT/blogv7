---
author: SeanFromIT
comments: "true"
date: 2013-12-28 00:52:00+00:00
layout: post
link: https://feeney.mba/2013/12/28/android-4-3-on-samsung-galaxy-note-2-sprint-sph-l900/
slug: android-4-3-on-samsung-galaxy-note-2-sprint-sph-l900
title: Android 4.3 on Samsung Galaxy Note 2 (Sprint) SPH-L900
wordpress_id: 649
categories:
- android
- cellphone
---
&lt;APKs removed during blog migration 2018. Contact if you need them.&gt;

This post assumes you already have a rooted Note 2 with TWRP or ClockworkMod Recovery installed on your phone and a working Odin install on your PC.

  1. Download lorjay589's MK4 Knox Free Deodex ROM (MK4_4.3_Deodex_Rooted_12-4.zip).
  2. Install via your custom recovery partition of choice, wiping dalvik and cache when done. No need to fix root (it wasn't lost, even though TWRP suspects it was). Reboot.
  3. Let the phone start-up, get your apps setup etc. You'll notice wifi isn't working.
  4. Download and unrar this wifi patch (Wifi_patch_SPHL900.tar.rar) by dr.ketan.
  5. Connect your phone to your computer via USB and reboot the phone into Download mode (an option in the reboot menu of this ROM).
  6. Open Odin, click the PDA button and browse to the md5 file you unrared. Click Start. When you see All threads completed. (succeed 1 / failed 0) and the phone reboots you're all set. Enjoy the final version of Jelly Bean! 
This (likely final) Note 2 update from Samsung adds support for Galaxy Gear wearable devices, updated Samsung apps, enhanced WiFi performance, extended battery life when using Exchange, and other minor fixes.  
**  
** **This ROM also enables the built-in Hotspot feature for wifi tethering.** Your phone number is the WPA2 password. It can take a minute for the phone to process the connection before your device can access the Internet after authenticating with the Hotspot.  
  
Note that Device Encryption is not functioning in this ROM, so you might not be able to get to some Exchange servers.  
  
via [XDA](http://forum.xda-developers.com/showthread.php?t=2541395)  
  
Update 9/6/14: I noticed that in Android 4.4.2 I had to remove the battery to get Windows USB recognition of ODIN mode. Weird.  
  

