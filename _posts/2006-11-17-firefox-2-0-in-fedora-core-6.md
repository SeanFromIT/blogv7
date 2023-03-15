---
author: SeanFromIT
comments: "true"
date: 2006-11-17 03:44:00+00:00
layout: post
link: https://feeney.mba/2006/11/17/firefox-2-0-in-fedora-core-6/
slug: firefox-2-0-in-fedora-core-6
title: Firefox 2.0 in Fedora Core 6
wordpress_id: 333
categories:
- fedora
- firefox
- linux
---

Not much help on the web for installing Firefox 2 in FC6. [One site](http://www.philoking.com/2006/11/15/how-to-update-to-firefox-20-on-fedora-core-6-the-easy-way/) suggested switching over to the remi yum repo, but I [manually downloaded](http://www.diaspoir.net/blog/mt/2006/10/firefox_2_on_fedora_core_6.html) the remi RPM of Firefox 2 and it did not work on my system. So I found this on the Fedora Wiki:

<blockquote>You can install the development version. Warning: This might result in instability.  
  
yum --enablerepo=development install firefox  
</blockquote>

This worked for me. The wiki notes that the Fedora developers are focusing on Firefox 3 so they won't be creating a non-development version of the RPM. This is confirmed over on the Mozilla site. That's what they say now, but I'm sure someone will create an RPM on their own and it will wind up in the popular repo's any day now (remi did it, but then again the remi one didn't work for me).
