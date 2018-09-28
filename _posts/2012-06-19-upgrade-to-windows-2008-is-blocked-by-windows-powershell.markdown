---
author: SeanFromIT
comments: true
date: 2012-06-19 18:08:00+00:00
layout: post
link: https://feeney.mba/2012/06/19/upgrade-to-windows-2008-is-blocked-by-windows-powershell/
slug: upgrade-to-windows-2008-is-blocked-by-windows-powershell
title: Upgrade to Windows 2008 is Blocked by Windows Powershell
wordpress_id: 85
categories:
- Powershell
- Windows Server 2003
- Windows Server 2008
---

When trying to upgrade Windows 2003 to Windows 2008, the upgrade may fail because Windows Powershell is installed. You may then be unable to find Windows Powershell in Add/Remove Programs, even when you look at installed updates, and even when you look for any of the various KB numbers. A workaround is to rename the C:WindowsSystem32WindowsPowerShell folder (and C:WindowsSysWow64WindowsPowerShell in x64) and retry the upgrade. You'd think it would look into the registry or something, but it doesn't!  
  
  

