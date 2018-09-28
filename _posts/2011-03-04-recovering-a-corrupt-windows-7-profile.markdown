---
author: SeanFromIT
comments: true
date: 2011-03-04 16:07:00+00:00
layout: post
link: https://feeney.mba/2011/03/04/recovering-a-corrupt-windows-7-profile/
slug: recovering-a-corrupt-windows-7-profile
title: Recovering a Corrupt Windows 7 Profile
wordpress_id: 114
categories:
- Microsoft
- Windows 7
---

This morning when I logged into Windows 7 all of my icons were blank. So I rebooted. This time when I logged in it was like I was a completely new user, and some things were broken (for example, Folder View Options list was completely blank). Corrupt profile, I figure. So here's how I recovered:  

  1. Since I was logged in as some TEMP profile (check: Go to My Documents. It's blank. Now go to C:\Users\username\My Documents. It's not blank. You're not logged in as username even though you should be), and was a member of the local Administrators group, I went ahead and copied C:\Users\username to C:\username.
  2. Run `regedit`. Go to `"HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsNTCurrentVersionProfileList"` and expand it. You'll see several S-1-5-# keys under it. Go through each one, checking the value of "ProfileImagePath" to find username's profile. When you find it, delete the entire S-1-5-# key.
  3. Reboot. Log in as username again. A new default profile will be created. When it's done loading, log out.
  4. Log in as a local Administrator other than username. Copy C:\username back to C:\Users\username. Choose Yes to all merge and overwrite prompts. Choose Skip to any permission problem prompts (as long as you're a local administrator it doesn't matter).
  5. Next time the user logs in everything should be back to normal. Some shortcuts may have to be re-established (for me: Taskbar Toolbars), but the bulk of the profile is as it originally was before corruption.

[via interworks](http://www.interworks.com/blogs/dsmith/2010/06/07/recovering-corrupt-windows-7-profile)
