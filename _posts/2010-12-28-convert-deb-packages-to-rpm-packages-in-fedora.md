---
author: SeanFromIT
comments: "true"
date: 2010-12-28 18:26:00+00:00
layout: post
link: https://feeney.mba/2010/12/28/convert-deb-packages-to-rpm-packages-in-fedora/
slug: convert-deb-packages-to-rpm-packages-in-fedora
title: Convert deb packages to rpm packages in Fedora
wordpress_id: 119
categories:
- fedora
- linux
---

  1. Download alien at http://packages.debian.org/unstable/source/alien
  2. su root
  3. Extract package and cd to the directory. 

<blockquote>perl Makefile.PL; make; make install  
yum groupinstall "Development Tools"  
yum install rpmdevtools</blockquote>

  4. su back to your normal user 

<blockquote>cd ~; rpmdev-setuptree</blockquote>

  5. To convert (must be root): 

<blockquote>alien --to-rpm something.deb</blockquote>
