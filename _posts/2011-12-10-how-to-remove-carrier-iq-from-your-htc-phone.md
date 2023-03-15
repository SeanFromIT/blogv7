---
author: SeanFromIT
comments: "true"
date: 2011-12-10 18:48:00+00:00
layout: post
link: https://feeney.mba/2011/12/10/how-to-remove-carrier-iq-from-your-htc-phone/
slug: how-to-remove-carrier-iq-from-your-htc-phone
title: How to Remove Carrier IQ from your HTC Phone
wordpress_id: 92
categories:
- android
- cellphone
- privacy
- Security
---

Carrier IQ is all the rage these days. Here are the simple steps to remove it from your HTC phone.  


  1. Root your phone. Google for "how to root xyz" where xyz is your phone make and model. For more HTC phones you'll use unrevoked or revolution.
  2. Install Titanium Backup.
  3. Go to the Backup/Restore tab.
  4. Scroll to HTC IQAgent and tap it.
  5. Press "Un-install !" button and confirm.
  6. Do the same for IQRD.

If you really want all traces of it gone, additionally you should do the following:

  * from /system/bin, remove 'iqd' and 'iqfd'
  * from /system/lib, remove libhtciqagent.so, libciq_htc.so, libciq_client.so
  * from /system/etc, remove iqprofile.pro
  * from /data/data, remove com.htc.android.iqrd and com.htc.android.iqagent. 

You should probably then clear the dalvik cache by booting into clockwork mod.
