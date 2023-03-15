---
author: SeanFromIT
comments: "true"
date: 2011-06-04 04:07:00+00:00
layout: post
link: https://feeney.mba/2011/06/04/bash-on-android-evo-4g/
slug: bash-on-android-evo-4g
title: Bash on Android Evo 4G
wordpress_id: 105
categories:
- android
---

Download [bash](http://pub.mzet.net/bash) in your Android browser.  


<blockquote>su  
mount -o rw,remount -t yaffs2 /dev/block/mtdblock3 /system  
cat /mnt/sdcard/download/bash.txt > /system/bin/bash  
chmod 0755 /system/bin/bash  
</blockquote>

Now in Terminal Emulator you can set "Command line" (your shell) from /system/bin/sh - to **/system/bin/bash -**
