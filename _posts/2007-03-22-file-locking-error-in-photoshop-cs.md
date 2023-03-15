---
author: SeanFromIT
comments: "true"
date: 2007-03-22 23:13:00+00:00
layout: post
link: https://feeney.mba/2007/03/22/file-locking-error-in-photoshop-cs/
slug: file-locking-error-in-photoshop-cs
title: File locking error in Photoshop CS
wordpress_id: 303
categories:
- Photoshop
- Windows Vista
---

Today when I went to open Photoshop CS on my Vista machine I got the error:  
  


<blockquote>"Photoshop could not initialize because the file is locked. Please unlock the file."</blockquote>

  
A cryptic message since it doesn't actually tell you what file it's talking about, or where it is, but I assume it is the scratch file because this happened after I changed the drive that it uses as a scratch disk.  
  
After some hunting on the 'net I found that this is caused when Photoshop doesn't have Administrative rights. The fix: right click your link to Photoshop, go to Properties, Compatibility, and check "Run program as an Administrator."
