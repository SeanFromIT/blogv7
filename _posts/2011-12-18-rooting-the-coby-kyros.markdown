---
author: SeanFromIT
comments: true
date: 2011-12-18 06:41:00+00:00
layout: post
link: https://feeney.mba/2011/12/18/rooting-the-coby-kyros/
slug: rooting-the-coby-kyros
title: Rooting the Coby Kyros
wordpress_id: 90
categories:
- android
- google
- tablet
---
&lt;APKs removed during blog migration 2018. Contact if you need them.&gt;

This was tested with the MID7022. This newer version of the Kyros comes with Android 2.3 and APK Installer pre-installed. If you have a different MID version, stop at step 7 and refer to [CyanogenMod site](http://androtab.info/cyanogenmod/telechips/) for correct ClockworkMod image file. I'm using Windows 7 for the following:  


1. Install Android SDK per [CyanogenMod instructions](http://wiki.cyanogenmod.com/wiki/Howto:_Install_the_Android_SDK#Windows).
2. Replace the contents of C:\android-sdk-windows\extras\google\usb_driver with the Telechips, Inc adb driver (TCC-ADB-DRIVER-32.ZIP).
3. Connect your phone to your computer via USB, put your phone in USB debugging mode and do not mount SD card to your computer.
4. Install [SuperOneClick](http://forum.xda-developers.com/showthread.php?t=803682) and click Root.
5. Once complete, remount Nand and then SD card in Settings.
6. Make a backup of your current recovery image:
    1. Download [dump-recovery-signed.zip](http://files.androtab.info/telechips/dump-recovery/dump-recovery-signed.zip) and save as update.zip on your SD card.
    2. Turn off USB storage and go to Settings-About device-System Updates-Install system update. Choose from SD card.
    3. The stock recovery will automatically be dumped as dumped_recovery.img and /proc/mtd will be copied as dumped_proc_mtd.txt on root of SD card. Keep them in safe place.
7. Install ROM Manager (ClockworkMod) from AppsLib. "Flash ClockworkMod Recovery" option does not yet work for Telechips, so we'll flash it manually:
    1. Download [KYROS7022-8K-recovery-signed.zip](http://files.androtab.info/telechips/cm7/20111029/KYROS7022-8K/KYROS7022-8K-recovery-signed.zip) and save as update.zip on your SD card. Do the same thing as you did in step 6 to install.
    2. Open ROM Manager and choose Reboot into Recovery. Allow the superuser request. To navigate the recovery screen: MENU- = next(down), HOME/POWER = select, BACK = back
    3. Go to Backup and Restore - Backup. This will create a backup of your entire system image onto your SD card. When it's complete choose Reboot system now.
8. Because CyanogenMod doesn't yet support a bunch of features (including the Kyros' strange software-based volume up/down control), I'm keeping the (rooted) stock image but I'd rather have Google Market. Here's how to install it:
    1. Download Market.rar (Market.rar). Extract the contents of the Market folder to your SD card.
    2. Remount your SD card to your tablet, open APK Installer and install in the following order:
        1. OneTimeInitializer.apk (the one with the blank name)
        2. SetupWizard.apk
        3. GoogleServicesFramework.apk
        4. Vending.apk (name shows as Market)
    3. Turn your tablet off and turn it on again.
    4. Next time you press the home button, a window saying “Complete action using” will appear, mark “Use by default” and choose the “Launcher”. Also, the camera shortcut on your home screen will stop working, all you have to do is delete it and re-add it.

Once you have Market on there, you'll find some things still missing. Here's a link to the latest Netflix app (netflix.apk) (1.5.2 as of 12/25/2011), Adobe Flash (Flash_Player_v10.3.186.3.apk) (10.3.186.3 as of 12/25/2011) and [Pandora](http://pandora.com/radio/static/android/pandora.apk).
