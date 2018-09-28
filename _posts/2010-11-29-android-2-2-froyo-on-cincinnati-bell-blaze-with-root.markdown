---
author: SeanFromIT
comments: true
date: 2010-11-29 00:14:00+00:00
layout: post
link: https://feeney.mba/2010/11/29/android-2-2-froyo-on-cincinnati-bell-blaze-with-root/
slug: android-2-2-froyo-on-cincinnati-bell-blaze-with-root
title: Android 2.2 (Froyo) on Cincinnati Bell Blaze with Root
wordpress_id: 121
categories:
- android
- cellphone
- cincinnati
---
&lt;APKs removed during blog migration 2018. Contact if you need them.&gt;

Windows-only instructions...Linux users who have followed my previous SDK tips should be able to figure it out pretty easily. **This will erase all of your programs, settings, data, etc**. Backup, backup, and backup before attempting.  


  1. Download the Android SDK (android-sdk_r07-windows.zip) and ClockworkMod Recovery Z71 v2.5.1.0 (clockwork-z71.img).
  2. Extract the SDK to c:. Copy the recovery img to c:\android-sdk-windowstools.
  3. Hook your Blaze up to your computer via USB, turn off the phone. Turn it back on in fastboot mode (red 'end call' button + volume down + power). When it hangs at the Cincinnati Bell logo you're where you need to be.
  4. Open up a Windows command prompt and type:

```bash
cd c:\android-sdk-windows\tools
fastboot flash recovery clockwork-z71.img
fastboot reboot
```

  5. The phone will reboot normally. Download CyanogenMod ROM 6.1 RC3 (update-cm-6.1.0-RC3-Z71-signed.zip) and the signed Google Apps (gapps-mdpi-tiny-20101020-signed.zip). Mount your SD card (may require unplugging from computer and plugging back in to get the right **USB Connected** icon in Notifications), copy the ROM and Google Apps to the root of your SD card. Safely unmount the SD card from your computer (system tray - safely remove hardware - Eject Qualcomm HSUSB Device) and **Turn off USB storage** (Notifications) on your Blaze.
  6. Turn the phone off again and back on into recovery mode (camera + volume up + power). ClockworkMod Recovery appears.
  7. To nagivate in the recovery menu use the volume buttons and the trackball to select. Let's start by doing a backup in case something goes wrong. Select **backup and restore** and then **backup**. This can take a few minutes.
  8. When complete, select **install zip from sd card** then **choose zip from sd card**. Selecting the last one there is tricky because it skips ahead two with each press of the volume button and this menu screen has an even number of options. The trick is to hold down the volume button and you'll notice it only goes down one. But if you release it goes down one more. So while holding volume down such that you're on **choose zip from sd card**, press the trackball to select. Use this trick where ever needed to get through these menus.
  9. Select **update-cm-6.1.0-RC3-Z71-signed.zip**. Select the Yes option to confirm. When you're returned to the menu it's done. Select **choose zip from sd card** again. This time select **gapps-mdpi-tiny-20101020-signed.zip** and confirm.
  10. Press the back button (far right soft button at bottom of screen) to return to the main menu. Select **wipe data/factory reset** and confirm.
  11. You're done! Select **reboot system now** and you can enjoy Android 2.2 on your Blaze. Root is automatically enabled.

Thanks to [CyanogenMod](http://www.cyanogenmod.com/) team for porting 2.2 to the Z71 line and [this author](http://www.bloggingtipsonline.com/2010/11/cyanogenmod-6-1-for-commtiva-z1-boston-spice-mi-300-a688-and-other-clones/) for pointing it out. GPS and flash are fixed in this latest RC. If you notice any other problems, let someone else know! I'm selling my Blaze on eBay (I've since upgraded to Sprint's Evo 4G). So if you'd like a rooted 2.2 Blaze without any of the hassle of doing it yourself, [buy mine on eBay](http://cgi.ebay.com/ws/eBayISAPI.dll?ViewItem&item=200548930275)!
