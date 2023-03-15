---
author: SeanFromIT
comments: "true"
date: 2010-09-05 07:02:00+00:00
layout: post
link: https://feeney.mba/2010/09/05/android-2-1-update-1-eclair-on-cincinnati-bell-blaze-with-root/
slug: android-2-1-update-1-eclair-on-cincinnati-bell-blaze-with-root
title: Android 2.1 Update 1 (Eclair) on Cincinnati Bell Blaze with Root
wordpress_id: 128
categories:
- android
- cellphone
- cincinnati
---
&lt;APKs removed during blog migration 2018. Contact if you need them.&gt;

![]({{ site.baseurl }}/assets/img/2010/09/DSCF1857small-300x225.jpg)

Yes, it is possible. No IMEI problems, wireless works fine, etc. Apps seem more stable (Barcode Scanner doesn't constantly crash, Navigation no longer crashes when you change the angle of the phone). But unfortunately the proximity sensor is still broken (UV sensitive - you can't use your voicemail in the dark). Clearly that's a hardware issue with the Blaze. Be sure to back up your phone before continuing - the update will erase everything not stored on the SD card.  
  
For Windows 32-bit (I did not test): [x86.rar](http://rom.apanda.com.cn/A60/Hipi2_1_9/x86.rar)  
For Windows 64-bit (This is what I used): [x64.rar](http://rom.apanda.com.cn/A60/Hipi2_1_9/x64.rar)  
The ROM: blaze21.nb0 (blaze21.nb0)  
  
Run setup.exe, be sure to grant permission to install drivers in any pop up windows you get during install.  
  
Connect your phone to your PC, open the SUT tool and point it at the ROM. Click next and your phone will reboot.  
_**Important**: You'll see an error on your phone when it comes back up, but don't touch anything. After a minute or two the screen will go black and then you'll see some small white text. This means things are going well. If you never see the white text and the SUT tool gives an error, the fix is disconnecting your phone from your PC, rebooting your phone into FTM mode (hold Volume Up, Volume Down and the Power Button during boot), and then removing the battery to get back out of FTM mode. Connect the phone to your PC, turn it back on, and try running the SUT tool again. It should work this time._  
After about 10 minutes and the phone rebooting three or four times, the SUT tool will inform you that all is well and the update has been applied.  
  
Now that you're up and running with 2.1, let's root. Grab [Universal Androot](http://blog.23corner.com/2010/08/30/universal-androot-1-6-2-beta-5/) and run. It's that simple. I'm told that Androot also works for rooting the new Motorola Milestone aka Motorola Motoroi.
