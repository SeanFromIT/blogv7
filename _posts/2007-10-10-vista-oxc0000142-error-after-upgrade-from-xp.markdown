---
author: SeanFromIT
comments: true
date: 2007-10-10 13:29:00+00:00
layout: post
link: https://feeney.mba/2007/10/10/vista-oxc0000142-error-after-upgrade-from-xp/
slug: vista-oxc0000142-error-after-upgrade-from-xp
title: Vista oxc0000142 Error After Upgrade from XP
wordpress_id: 233
categories:
- Windows Vista
---

In my case, this was caused by customizations I had made to explorer.exe, i.e. changing the "Start" menu text. To fix, boot to the Vista CD, choose Repair, let it run its scan and when it can't fix it choose Advanced options and Command Prompt. Assuming you renamed your explorer.exe, you can just cd to your Windows directory and copy explorer.exe over your renamed explorer.exe. Example:  

```bash
c:
cd Windows
copy explorer.exe explorerNew.exe
```
