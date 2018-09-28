---
author: SeanFromIT
comments: true
date: 2009-10-17 01:12:00+00:00
layout: post
link: https://feeney.mba/2009/10/17/combining-separate-m2v-and-wav-into-a-single-mpg/
slug: combining-separate-m2v-and-wav-into-a-single-mpg
title: Combining separate m2v and wav into a single mpg
wordpress_id: 148
categories:
- mp2
- mplayer
- Windows
---

When you export MPEG2-DVD in Adobe Premiere, you might wind up with separate m2v and wav files instead of one nice tidy mpeg file that you can upload to an online video sharing site. Here's a freeware way to combine those files:  


  1. Download the latest mplayer distributable for your CPU from [http://tirnanog.fate.jp/mirror/mplayer/](http://tirnanog.fate.jp/mirror/mplayer/). You'll need a heavy-duty unzip program like WinRAR to open the .7z file. Extract to the folder where your video and audio file is.  

  2. Open up a command prompt and type the following command:   


<blockquote>mencoder source.m2v -audiofile source.wav -oac copy -ovc lavc -o output.mpg  
</blockquote>

where source.m2v is your source video file, source.wav is your source audio file, and output.mpg is what you want your new merged mpg file to be named.    

You may have to fiddle with the -oac and -ovc codec options depending on how you output your video in your editor software. Useful options are:  
**-oac**:  


  * **copy** (Leave codec as is)  

  * **pcm**
  * **mp3lame** (Lame mp3 encoder)
  * **lavc** (libavcodec)
**-ovc**:  


  * **copy** (Leave codec as is)  

  * **raw** (uncompressed)  

  * **nuv** (nuppel)  

  * **lavc** (libavcodec)  

  * **qtvideo** (QuickTime)  

  * **xvid** (XviD)  

  * **x264** (H.264)  

