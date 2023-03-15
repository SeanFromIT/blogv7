---
author: SeanFromIT
comments: "true"
date: 2012-10-04 20:25:00+00:00
layout: post
link: https://feeney.mba/2012/10/04/bash-busybox-on-rooted-xperia-ion/
slug: bash-busybox-on-rooted-xperia-ion
title: Bash + Busybox on Rooted Xperia Ion
wordpress_id: 79
categories:
- android
- linux
- sony
---

Download [bash](http://pub.mzet.net/bash) in your Android browser of choice (I highly recommend Chrome).  


<blockquote>unset PS1 PROMPT_COMMAND</blockquote>

(type anything and hit enter if prompted with weird E symbol)  


<blockquote>su</blockquote>

<blockquote>mount -o rw,remount -t ext4 dev/block/mmcblk0p15 /system</blockquote>

<blockquote>cat /mnt/sdcard/Download/bash.txt > /system/bin/bash</blockquote>

<blockquote>chmod 0755 /system/bin/bash</blockquote>

For BusyBox, I recommend JRummy16's [installer](http://market.android.com/details?id=com.jrummy.busybox.installer) but change the install location to /system/bin/ and choose "Advanced install." The defaults on the advanced install page are fine. For whatever reason, the "Symlink applets" option does not work without going into advanced install.  
  
Now in Terminal Emulator you can set "Command line" (your shell) from /system/bin/sh - to **/system/bin/bash -** and you'll have most of your standard Linux commands.  
  
  

