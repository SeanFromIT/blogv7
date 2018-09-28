---
author: SeanFromIT
comments: true
date: 2007-03-07 11:49:00+00:00
layout: post
link: https://feeney.mba/2007/03/07/disabling-user-account-control-prompts-in-vista/
slug: disabling-user-account-control-prompts-in-vista
title: Disabling User Account Control Prompts in Vista
wordpress_id: 316
categories:
- Local Security Policy
- UAC
- Windows Vista
---

In Vista, User Account Control (UAC) has been built in much like it is in Linux. The idea being, if you're just doing ordinary things like running programs, you shouldn't need to have Administrative rights. You should only "need" those rights when installing programs, editing the system configuration, etc.  
  
Most of us "Microsoft Guys" who have been using Windows since its beginning dislike UAC - it's a nuessance that we'd rather live without since we "know" we will never do something bad to our computer like install malware. So, just for us, there is a way to disable UAC:  
  


  1. From the Start search bar, type "Local Security Policy"
  
  
  2. Accept the elevation prompt
  
  
  3. From the snap-in, select Security Settings -> Local Policy -> Security Options
  
  
  4. Scroll down to the bottom, where you'll find nine different group policy settings for granular configuration of UAC.
  
  
  5. Perhaps the best choice to select is to change the setting:  
  User Account Control: Behavior of the elevation prompt for administrators in Admin Approval Mode from Prompt for consent to Elevate without prompting.
  
  
From MSDN: 

<blockquote>"What does this do? Despite the warning from the Windows Security Center, UAC isn't actually switched off. It's still there, and all your processes will still run as a standard user. To prove this, open a command prompt and try to save a file to the c: directory. You'll get an access denied error message. However, when a process is marked for elevation, instead of getting the secure desktop elevation prompt, the request will be silently approved. To show this in action, right click on a command prompt shortcut and choose "Run as Administrator". You'll see the command prompt open without elevation, but the window title will show that you're running with full administrative privileges."</blockquote>

  
  
Update: To fully disable UAC, you also need to edit your User Account through your Control Panel and change the UAC option.
