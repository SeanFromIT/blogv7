---
date: 2025-03-28T00:49:55.773Z
title: Can't Login to Windows 11 Without Internet
description: >-
  If your Internet is down and it's blocking your Windows Hello PIN, this post
  is for you.
categories:
  - Windows
comments: true
layout: post
---

Sometimes Windows 11 can get into a state where it claims you can't log in with your PIN while the Internet is down, even though the PIN is correct. It doesn't offer to failback to password even though the PIN is theoretically linked to your password.

This problem corresponds to a new GUI setting called "For improved security, only allow Windows Hello sign-in for Microsoft accounts on this device (recommended)" in Accounts > Sign-in options > Additional settings. If you can log in with some other administrator account, this is the setting to change. If you can't, here's how you disable it via Recovery:

Start your PC and on the login screen click the Power button at the bottom right, then press Shift and click Restart. That will boot your PC into the Recovery Environment. 

Here, choose Troubleshoot, then Advanced Options, then Command Prompt. 

Run this command to disable the option "Require Windows Hello Sign In for Microsoft Accounts":

reg add "HKLM\SOFTWARE\Microsoft\PolicyManager\default\Settings\AllowSignInOptions" /v value /t REG\_DWORD /d 0 /f

Type exit and hit enter

Select Continue to reboot into normal Windows. You should now be able to sign in with the PIN while offline. 
