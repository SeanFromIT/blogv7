---
author: SeanFromIT
comments: true
date: 2010-02-22 15:22:00+00:00
layout: post
link: https://feeney.mba/2010/02/22/system-componentmodel-win32exception-access-is-denied-error-message-when-attempting-to-run-command-line-program-from-asp-net/
slug: system-componentmodel-win32exception-access-is-denied-error-message-when-attempting-to-run-command-line-program-from-asp-net
title: '"System.ComponentModel.Win32Exception: Access is denied" Error message when
  attempting to run command line program from ASP.NET'
wordpress_id: 140
categories:
- asp.net
- errored
- Microsoft
---

See [this post](http://stackoverflow.com/questions/247668/running-command-line-from-an-aspx-page-and-returning-output-to-page) for information on how to run command line programs from ASP.NET. The solution to the error message is to add NTFS read permissions for the website user to %windir%system32cmd.exe.
