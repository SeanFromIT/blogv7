---
author: SeanFromIT
comments: "true"
date: 2011-03-31 16:29:00+00:00
layout: post
link: https://feeney.mba/2011/03/31/add-epel-repository-to-rhel6/
slug: add-epel-repository-to-rhel6
title: Add EPEL Repository to RHEL6
wordpress_id: 110
categories:
- linux
- red hat
- rhel
---

  1. Enable EPEL repo:

<blockquote>wget http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-5.noarch.rpm  
rpm -ivh epel-release-6-5.noarch.rpm</blockquote>

  2. Enable the 'optional' RHN Channel: 
    1. Go to RHN Website
    2. Click into your system's profile
    3. Click Alter Channel Subscriptions at the bottom left next to Subscribed Channels
    4. Check RHEL Server Optional (v. 6 64-bit x86_64) and press Change Subscriptions
  3. Change all https to http in /etc/yum.repos.d/epel.repo and epel-testing.repo
