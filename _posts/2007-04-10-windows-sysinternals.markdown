---
author: SeanFromIT
comments: true
date: 2007-04-10 08:47:00+00:00
layout: post
link: https://feeney.mba/2007/04/10/windows-sysinternals/
slug: windows-sysinternals
title: Windows Sysinternals
wordpress_id: 299
categories:
- File and Disk Utilities
- Miscellaneous Utilities
- Networking Utilities
- Process Utilities
- Security
- Security Utilities
- System Information Utilities
- Tools
- Utilities
- Windows
---

Several Windows tools here including File and Disk, Networking, Process, Security, and System Information Utilities. Some highlights:  
  
[Process Monitor v1.1](http://www.microsoft.com/technet/sysinternals/FileAndDisk/processmonitor.mspx), an advanced monitoring tool for Windows that shows real-time file system, registry, and process/thread activity. It combines the features of two earlier Sysinternals utilities, Filemon and Regmon, and adds an extensive list of new enhancements.   
  
[AccessChk v3.0](http://www.microsoft.com/technet/sysinternals/Security/AccessChk.mspx), a security utility that shows you the methods that users have to gain access to files, registry keys, and services. The update adds support for processes, including display of their Windows Vista object and running integrity levels.   
  
[PSExec v1.80](http://www.microsoft.com/technet/sysinternals/Security/PsExec.mspx), a lightweight Telnet replacement that lets you execute processes on other systems. This update enhances the -i option to allow process launch in a specific session; on Windows Vista, the -l switch runs a process with low integrity.   
  
Pay special attention to PSExec, as this tool went missing after MS bought the Sysinternals guys out. Now that it's available again, and hopefully being improved upon by MS, you can use it to launch programs remotely and automatically, for example to execute scripts on multiple Windows machines at once (particularly when system time is involved and cannot be trusted).
