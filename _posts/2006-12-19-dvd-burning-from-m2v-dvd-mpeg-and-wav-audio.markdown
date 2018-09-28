---
author: SeanFromIT
comments: true
date: 2006-12-19 18:49:00+00:00
layout: post
link: https://feeney.mba/2006/12/19/dvd-burning-from-m2v-dvd-mpeg-and-wav-audio/
slug: dvd-burning-from-m2v-dvd-mpeg-and-wav-audio
title: DVD Burning from .m2v (DVD-MPEG) and .wav (Audio)
wordpress_id: 324
categories:
- ac3
- dvd
- dvd authoring
- ifo
- iso
- m2v
- mp2
- NTSC
- PAL
- wav
---

In Adobe Premiere Pro, it is possible to export to DVD format using the free "Adobe Media Encoder" instead of the costly "Export to DVD" feature. You do have to register online to use the DVD output inside the Encoder but it is free and no personal information is collected. Depending on your settings, you will then wind up with a .m2v video file and a .wav audio file. There are several ways to burn these two files to DVD, but here's a freeware way:  
  
Step 1) Convert the .wav to .ac3. Use ffMPEG. A GUI version of ffMPEG, called ffMPEGGUI, is available here: [http://www.dvdrhelp.com/tools.php?tool=434](http://www.dvdrhelp.com/tools.php?tool=434)  
  
Step 2) Use DVDAuthor to create the DVD-burnable files. A GUI version of DVDAuthor, called DVDAuthorGUI, is available here: [http://download.videohelp.com/liquid217/dvdauthorgui.pl?p=download](http://download.videohelp.com/liquid217/dvdauthorgui.pl?p=download)  
From [overclock.net](http://www.overclock.net/pvrs-dvrs-htpcs/69716-how-burn-m2v-file.html):  


1. Start DVDAuthorgui:
2. Set the DVD format on PAL or NTSC.
3. Press "add title" and add your video stream (m2v) and audio stream (AC3 or mp2).
4. Under the file tab select "create iso after authoring".
5. Press "author dvd".
6. Enter a folder name in which the VIDEO_TS and AUDIO_TS folders will be created.
7. The iso file will be created outside the named folder.

This process creates both an ISO version and the IFO version. ISO files can be burned by just about any burner software. If you have DVD Decrypter (available [here](http://www.mrbass.org/dvdrip/)), it can burn IFO files directly, so you could skip the ISO option to speed things up a little.
