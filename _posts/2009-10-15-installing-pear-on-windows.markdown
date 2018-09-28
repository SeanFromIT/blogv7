---
author: SeanFromIT
comments: true
date: 2009-10-15 14:30:00+00:00
layout: post
link: https://feeney.mba/2009/10/15/installing-pear-on-windows/
slug: installing-pear-on-windows
title: Installing PEAR on Windows
wordpress_id: 149
categories:
- pear
- php
- Windows
---

go-pear.bat is no longer included with the PHP Windows installer, so you have to do things manually.  
  


  1. Download the [go-pear file](http://pear.php.net/go-pear) locally and run from command line with "php go-pear" (or whatever you named the file).
  2. Run the **PEAR_ENV** registry file generated during installation.
  3. **pear** and **pecl** commands should work fine from command line now.
  

