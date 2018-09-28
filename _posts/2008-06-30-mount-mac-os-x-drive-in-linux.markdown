---
author: SeanFromIT
comments: true
date: 2008-06-30 02:40:00+00:00
layout: post
link: https://feeney.mba/2008/06/30/mount-mac-os-x-drive-in-linux/
slug: mount-mac-os-x-drive-in-linux
title: Mount Mac OS X Drive in Linux
wordpress_id: 195
categories:
- linux
- mac
- partitions
---

Unmount completely (if it tried to automount), make a folder for it, and then...  


<blockquote>mount -t hfsplus /dev/sda /media/myfolder</blockquote>
