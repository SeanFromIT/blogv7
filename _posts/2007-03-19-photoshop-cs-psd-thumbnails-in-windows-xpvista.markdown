---
author: SeanFromIT
comments: true
date: 2007-03-19 06:49:00+00:00
layout: post
link: https://feeney.mba/2007/03/19/photoshop-cs-psd-thumbnails-in-windows-xpvista/
slug: photoshop-cs-psd-thumbnails-in-windows-xpvista
title: Photoshop CS .PSD Thumbnails in Windows XP/Vista
wordpress_id: 308
categories:
- Adobe
- Photoshop
- Windows Vista
- Windows XP
---

Update for Windows 7: The open source [Pictus](http://poppeman.se/pictus/) project enables thumbnails for PSD files and others.  
  
---  
  
I can confirm that this works in Vista as well.  
  
An entry from my old Augury Blog v4 (11/28/2005 5:34PM):  
  
After I upgraded to Photoshop CS from Photoshop 7, I noticed that this version of Photoshop no longer gave me thumbnails of my PSD files in Windows Explorer. So today I went hunting for a way to bring that feature back.  
  
Mike Golding reports that you can download a .dll file and drop it in Adobe's Shared-Shell folder to bring back the functionality. Here's his instructions:  


> Adobe Photoshop CS (v8.x) no longer supports displaying PSD files as thumbnails in Windows Explorer's thumbnail view, all you get is a standard Photoshop icon. The read-me file for Photoshop CS confirms this.
>> Photoshop CS no longer provides thumbnail icons of .psd files through operating system folder windows. Please use the File Browser to view your .psd thumbnail files.
> 
> If you have upgraded from a previous version of Photoshop to Photoshop CS you will be OK but a fresh install of CS will NOT included thumbnail previews of PSDs. However I have discovered how to fix this, all we need is a missing DLL to be placed in the right folder.
>    1. [Download psicon.dll from DLL Dump](http://www.dlldump.com/download-dll-files.php/dllfiles/P/psicon.dll/download.html)
>    2. Place the DLL in C:\Program Files\Common Files\Adobe\Shell
>    3. Thumbnail previews of PSD files are now back
> Simple but essential functionality. It does make you wonder why Adobe saw fit to remove the thumbnail preview in the first place!

Thanks Mike!

Various comments on his site suggest that maybe it was just too much work on Adobe's part to maintain both their own built-in PSD browser AND Microsoft's file browser. I would venture to guess that maybe Adobe just doesn't like Microsoft ;-), or that they would prefer third parties create those types of OS plug-ins.
