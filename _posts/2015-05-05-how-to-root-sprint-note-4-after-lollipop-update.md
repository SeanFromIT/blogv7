---
author: SeanFromIT
comments: "true"
date: 2015-05-05 20:53:52+00:00
layout: post
link: https://feeney.mba/2015/05/05/how-to-root-sprint-note-4-after-lollipop-update/
slug: how-to-root-sprint-note-4-after-lollipop-update
title: How to Root Sprint Note 4 After Lollipop Update
wordpress_id: 464
categories:
- android
---
&lt;APKs removed during blog migration 2018. Contact if you need them.&gt;

Congratulations, your Note 4 finally got Lollipop (Android 5.0.1)! Time to root it.

	
  1. Download Odin3 (Odin3.zip), TWRP (openrecovery-twrp-2.8.1.1-trltespr.img.tar), and SuperSU (UPDATE-SuperSU-v2.37.zip) to your Windows-based computer.

	
  2. Copy the SuperSU file to your phone's internal storage or to your phone's SD card. Note where you put it.

	
  3. Power off your Note 4 then hold down Volume Down, Home and Power buttons together until you see a warning screen then release.

	
  4. Press Volume Up to continue.

	
  5. Connect your phone via microUSB to your computer. Unzip Odin3 and run the exe.

	
  6. You should see a yellow-highlighted box with a random COM number. If you don’t see this, [download Samsung Note 4 USB drivers](http://androiddrivers.net/samsung-android-drivers/galaxy-note-4-windows-drivers/), run the driver program, then unplug and reconnect your USB cable from your Note 4 to your computer.

	
  7. Click the PDA button and select the TWRP tar file you downloaded in step 1.

	
  8. Uncheck Auto Reboot and click Start. When complete you'll see in the Odin log window "All threads completed (succeed 1 / failed 0)".

	
  9. Remove the battery from your phone. Put the battery back in.

	
  10. Hold down Volume Up, Home and Power buttons together until you see blue "RECOVERY BOOTING" top left of the screen then release.

	
  11. TWRP should load. Click the first option, Install. Browse to where you copied the SuperSU file onto your phone and select it. Swipe to install. When successful click Reboot System.

	
  12. When your phone powers up you should have SuperSU installed. Open it and accept any dialog windows it prompts you with.


You are now successfully rooted. To get the most of your rooted device, you may also want to do the following:

**Enable USB Debugging**



	
  * Settings -> About Phone.

	
  * Tap "Build number" 7 times until you get the note "You are now a developer."

	
  * Settings will now have a Developer Options choice.

	
  * Inside of Developer Options, tick "USB debugging."

	
  * [Here's a helpful graphic](http://www.recovery-android.com/enable-usb-debugging-on-android.html)


**Install BusyBox**



	
  * Download Stericson's [BusyBox installer](https://play.google.com/store/apps/details?id=stericson.busybox&hl=en).

	
  * I generally change the install location to /system/bin/ and accept the defaults.

	
  * You can safely uninstall the BusyBox installer when complete, or keep it for update notifications.


