---
author: SeanFromIT
comments: true
date: 2012-10-01 21:02:00+00:00
layout: post
link: https://feeney.mba/2012/10/01/xperia-ion-lt28at-official-ics-root/
slug: xperia-ion-lt28at-official-ics-root
title: Xperia Ion (lt28at) Official ICS + Root
wordpress_id: 80
categories:
- android
- cellphone
- hack
- sony
---
&lt;APKs removed during blog migration 2018. Contact if you need them.&gt;

1. Download and install [Sony PC Companion](http://www.sonymobile.com/us/tools/pc-companion/).
2. Hook your phone up to your computer via USB.
3. [![]({{ site.baseurl }}/assets/img/2012/10/xperiaUpgrade-300x183.jpg)]({{ site.baseurl }}/assets/img/2012/10/xperiaUpgrade.jpg)
4. Click Update and run through the prompts to install firmware version 6.1.C.1.105:
    [![]({{ site.baseurl }}/assets/img/2012/10/xperiaUpgrade2-300x183.jpg)]({{ site.baseurl }}/assets/img/2012/10/xperiaUpgrade2.jpg)
    [![]({{ site.baseurl }}/assets/img/2012/10/xperiaUpgrade3-300x183.jpg)]({{ site.baseurl }}/assets/img/2012/10/xperiaUpgrade3.jpg)
    [![]({{ site.baseurl }}/assets/img/2012/10/xperiaUpgrade4-300x183.jpg)]({{ site.baseurl }}/assets/img/2012/10/xperiaUpgrade4.jpg)
5. When you disconnect and turn the phone back on the upgrade process will finish up. It's normal for it to be really slow for a few minutes once you're able to log in.

_**Root**_


IMPORTANT: If you are using face unlock, disable it before preceding.  


  1. Install Backup-Restore.apk and Backup-wizard.apk available zipped here (backuprestore.zip). (Unzip, copy the two files to your SD card, use ASTRO or the file manager of your choice to launch.) Replace the existing versions if you have them.
  2. (Windows) - UNTESTED - Extract everything in this zip (Root_with_Restore_by_Bin4ry_v12.7z), launch the extracted RunMe.bat and follow the on-screen prompts. Select normal to begin.
  3. (Linux) Get a working adb install in your path as described [here](http://forum.xda-developers.com/showthread.php?t=1550414) or [here](https://docs.google.com/View?docID=0AS0vn8iv_zrVZGhyeGg3Z25fMGYzdmZobWNm&revision=_latest&hgd=1). Extract everything in this zip (xperia_ion_linux_ics_root.tar.gz), `chmod +x xperiaIon.sh`, run it and follow the on-screen prompts. Ignore the 'external storage' error after the restore operation starts. After reboot you should see a new SuperSU program installed, if so you're now rooted!

You can now setup face unlock again without issue.  
  
**_ClockworkMod Recovery_**: Extract this zip (RECOVERY_for_XperiaIon_v.4.zip) and run install.bat (Windows) or install.sh (Linux). [Props to popfan](http://forum.xda-developers.com/showthread.php?t=1830170). This doesn't appear to work with the ROM Manager program from the Play Store yet. To launch and use it, tap the SONY icon during boot several times. Use volume up/down buttons to navigate, home soft button to select.




Thanks to [AndroMods](http://www.andromods.com/root-unlock/how-to-root-xperia-ion-lt28at-lt28i-script-bin4ry-ics-jelly-bean.html) for linking to [Bin4ry's root method](http://forum.xda-developers.com/showpost.php?p=31545627&postcount=1). As always, you follow any of my advice at your own risk! Not responsible for bricked phones etc.  

