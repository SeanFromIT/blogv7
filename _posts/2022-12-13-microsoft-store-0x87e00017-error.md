---
author: SeanFromIT
comments: 'true'
layout: post
date: 2022-12-13 18:00:00 -0700
slug: microsoft-store-0x87e00017
title: Microsoft Store 0x87e00017 Error
description: Root Cause of 0x87e00017 Error
image: ''
categories: []

---
If you receive error **0x87e00017** when you try to install an app or game from the Microsoft Store, it indicates that Windows no longer has proper permissions to the folder(s) it uses during download and/or installation. I haven't dug deep enough to confirm, but presumably, this is D:\\WindowsApps and/or D:\\Program Files\\ModifiableWindowsApps. 

I've run into this a few times when I've carried the drive over from one Windows install to another. wsreset.exe is insufficient to fix the issue; you'll have to go in and either delete those paths in safe mode or format the drive.

If you're looking for confirmation that it is a permissions issue, try changing the target drive where 'New apps will save to' to D:\\ in Settings>System>Storage>Advanced storage settings>Where new content is saved. It will give you a more informative error pointing to permissions.