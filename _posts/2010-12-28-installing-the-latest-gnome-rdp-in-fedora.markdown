---
author: SeanFromIT
comments: true
date: 2010-12-28 18:31:00+00:00
layout: post
link: https://feeney.mba/2010/12/28/installing-the-latest-gnome-rdp-in-fedora/
slug: installing-the-latest-gnome-rdp-in-fedora
title: Installing the latest gnome-rdp in Fedora
wordpress_id: 118
categories:
- fedora
- linux
---
&lt;RPMs removed during blog migration 2018. Contact if you need them.&gt;

I like gnome-rdp because it's simple and supports ssh, vnc, and rdp all in one client.  

Prereq's: mono, docky  

Use which to determine if you have these installed. For example, "which mono". If none is found, install with "yum install mono".  

Download gnome-rdp 0.3.0.9-1 (gnome-rdp-0.3.0.9-1.noarch.rpm).  

Install with: "rpm -ivh gnome-rdp-0.3.0.9-1.noarch.rpm".  

Updates in this version: You can now hit enter instead of having to click OK when typing passwords. Group functionality is getting better, but you cannot delete them once created. A session can only exist in one group at a time. Still no sorting of sessions.  

---Old Versions---  
gnome-rdp 0.3.0.1-2 (gnome-rdp-0.3.0.1-2.noarch.rpm)  

Hints for this version: You must add at least one Identity and one Profile prior to adding a Session, and then click to select them when you do add a Session. Groups are still not really working, nor can you sort the Session list.
