---
author: SeanFromIT
comments: "true"
date: 2007-10-17 21:57:00+00:00
layout: post
link: https://feeney.mba/2007/10/17/knoppix-ntfs-mount-problem/
slug: knoppix-ntfs-mount-problem
title: Knoppix NTFS Mount Problem
wordpress_id: 231
categories:
- knoppix
- linux
---

When changing a hard drive to write-able mode,  


<blockquote>ERROR  
  
The remount command failed. Maybe there is another process accessing the file system currently.</blockquote>

  
  
You can fix by:  
  

    
    ntfsfix /dev/hda1<br></br>ntfsmount /dev/hda1 /media/hda1 -o force

  
  
Where hda1 is the drive with the problem. It will still say it's not writable on the desktop link, but if you go into it, it will let you delete files.
