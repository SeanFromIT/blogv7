---
author: SeanFromIT
comments: "true"
date: 2012-08-22 15:17:00+00:00
layout: post
link: https://feeney.mba/2012/08/22/spaces-in-ad-group-name-used-for-auth-in-pam-d/
slug: spaces-in-ad-group-name-used-for-auth-in-pam-d
title: Spaces in AD Group Name Used for Auth in pam.d
wordpress_id: 83
categories:
- Active Directory
- linux
- rhel
- Security
---

When locking down active directory authentication to only certain AD groups in Linux, it may be necessary to support a group name with spaces in it. Single and double quotes don't work. Backslashes don't work. For whatever reason, PAM chose to use [square brackets]. For example:  


<blockquote>auth  requisite  pam_succeed_if.so user ingroup [Group Name With Spaces]</blockquote>
