---
author: SeanFromIT
comments: true
date: 2010-10-11 15:19:00+00:00
layout: post
link: https://feeney.mba/2010/10/11/setup-windows-2008-dc-as-an-ntp-server/
slug: setup-windows-2008-dc-as-an-ntp-server
title: Setup Windows 2008 DC as an NTP Server
wordpress_id: 126
categories:
- Microsoft
- Windows Server 2008
---

Run command as Administrator. On the DC you want to keep time:  


<blockquote>net stop w32time  
w32tm /unregister  
w32tm /register  
net start w32time  
w32tm /config /manualpeerlist:0.us.pool.ntp.org,1.us.pool.ntp.org,2.us.pool.ntp.org,3.us.pool.ntp.org /syncfromflags:manual /reliable:yes /update</blockquote>

On your other DCs: 

<blockquote>w32tm /config /manualpeerlist:FQDNofTimeKeeper /syncfromflags:manual /reliable:no /update</blockquote>
