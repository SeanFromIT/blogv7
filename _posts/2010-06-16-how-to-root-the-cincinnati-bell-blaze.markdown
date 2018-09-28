---
author: SeanFromIT
comments: true
date: 2010-06-16 22:15:00+00:00
layout: post
link: https://feeney.mba/2010/06/16/how-to-root-the-cincinnati-bell-blaze/
slug: how-to-root-the-cincinnati-bell-blaze
title: How to Root the Cincinnati Bell Blaze
wordpress_id: 135
categories:
- android
- cellphone
- cincinnati
- google
---
&lt;APKs removed during blog migration 2018. Contact if you need them.&gt;

_(Also known as Commtiva Z71, Vibo A688, Orange Boston, Apanda A60, Wellcom A88, Muchtel A1, Chinavision Excalibur)_  
  
I'm not responsible for anything that goes wrong if you do this. You follow these instructions at your own risk.  


  1. Copy RUT folder from the faux CDROM that shows up when you plug in your phone in Windows to somewhere on your hard drive. These are the drivers you'll need for the following steps. Alternatively, here are the 32-bit Windows drivers (AndroidX32.zip) and here are the 64-bit Windows drivers (AndroidX64.zip) (thanks hillgr).
  2. Download GoRoot.zip (GoRoot.zip).
  3. Unplug your phone from your computer and power off. Hold down both volume up and down keys and while holding them down press and release the power button. Keep holding the buttons down until you see the black Foxconn FTM screen.
  4. Now that the phone is in the bootloader ("FTM mode"), plug it back into your computer. The new hardware installation wizard should appear. Select the option to choose the location of the driver files. Choose the option to instruct Windows where to search for drivers, then either key in the path or use the browse button to navigate to the location where you copied the RUT folder from step one. If Windows asks for permission to install unsigned/unverified drivers, select Yes. A series of devices will be installed.
  5. When all the devices are installed, open a command prompt by pressing Win+R and typing "cmd". In the command prompt navigate to the location where your GoRoot.zip files were unpacked to (e.g. if you unpacked to C: then type cd ). Type goroot.bat and wait for the commands to complete. After they are completed you have root access.
  6. Test your root access by downloading MarketEnabler and using it to change your Market region to T-Mobile (USA). This will let you download apps that Cincinnati Bell advertises but are normally unavailable on the Cincinnati Bell Market. If you need to switch back to the Cincinnati Bell market region for some reason, the code is 31042. 

Thanks to GridLock, hillgr (for figuring out the up+down volume key combination for FTM mode) and belgra77 (for linking me to [HTC Mania](http://www.htcmania.com/showthread.php?t=115557) and thus [this post](http://www.forumosa.com/taiwan/viewtopic.php?f=7&t=87256) on Forumosa). I'll post again when I get some custom ROMs working.  
  
If you're on Linux, here's GridLock's guide to [adb on Ubuntu](https://docs.google.com/View?docID=0AS0vn8iv_zrVZGhyeGg3Z25fMGYzdmZobWNm&revision=_latest&hgd=1). Basically install adb, configure for Blaze (add `SUBSYSTEM=="usb", SYSFS{idVendor}=="0489", MODE="0666"` as well as the others listed in the guide to `/etc/udev/rules.d/51-android.rules`) and grab the zip linked above for su and Superuser.apk files. The bat file just runs the following commands while in FTM:  

```bash
adb shell mount -t yaffs2 /dev/block/mtdblock7 /system
adb push su /system/bin
adb shell chmod 4755 /system/bin/su
adb push Superuser.apk /system/app
adb shell reboot
```
