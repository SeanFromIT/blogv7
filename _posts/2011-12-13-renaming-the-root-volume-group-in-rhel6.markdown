---
author: SeanFromIT
comments: true
date: 2011-12-13 15:30:00+00:00
layout: post
link: https://feeney.mba/2011/12/13/renaming-the-root-volume-group-in-rhel6/
slug: renaming-the-root-volume-group-in-rhel6
title: Renaming the root volume group in RHEL6
wordpress_id: 91
categories:
- linux
- red hat
---

<blockquote>renamevg vg_oldname vg_newname</blockquote>

edit _/etc/fstab_ to reflect the change  
edit kernel command(s) in grub (_/boot/grub/menu.lst_) to reflect the change
