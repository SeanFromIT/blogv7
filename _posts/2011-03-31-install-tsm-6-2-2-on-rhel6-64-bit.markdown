---
author: SeanFromIT
comments: true
date: 2011-03-31 21:11:00+00:00
layout: post
link: https://feeney.mba/2011/03/31/install-tsm-6-2-2-on-rhel6-64-bit/
slug: install-tsm-6-2-2-on-rhel6-64-bit
title: Install TSM 6.2.2 on RHEL6 64-bit
wordpress_id: 109
categories:
- IBM
- red hat
- rhel
- Tivoli
- TSM
---

[Download the tar from IBM](ftp://public.dhe.ibm.com/storage/tivoli-storage-management/maintenance/client/v6r2/Linux/LinuxX86/v622/)and extract it: 

<blockquote>tar -xf 6.2.2.0-TIV-TSMBAC-LinuxX86.tar</blockquote>

Grab dependencies from RHN and then install: 

<blockquote>yum -y install compat-libstdc++-33 compat-libstdc++-33.i686 libstdc++-4.4.4-13.el6.i686  
rpm -U gskcrypt32-8.0.13.4.linux.x86.rpm gskssl32-8.0.13.4.linux.x86.rpm  
rpm -U gskcrypt64-8.0.13.4.linux.x86_64.rpm gskssl64-8.0.13.4.linux.x86_64.rpm  
rpm -ivh TIVsm-API.i386.rpm TIVsm-API64.i386.rpm TIVsm-BA.i386.rpm</blockquote>
