---
author: SeanFromIT
comments: "true"
date: 2008-12-04 16:24:00+00:00
layout: post
link: https://feeney.mba/2008/12/04/signature-position-in-thunderbird/
slug: signature-position-in-thunderbird
title: Signature Position in Thunderbird
wordpress_id: 177
categories:
- hack
- mozilla
- thunderbird
---

If you attach a signature in Thunderbird, it will by default put your reply below your signature and even ignore your choices if you try changing the position through the settings menu. To fix this, you're going to have to edit your preferences file manually.  


  * Close Thunderbird.
  * Backup C:\Documents and Settings\Username\Application Data\Thunderbird\Profiles\randomHash.defaultprefs.js to somewhere, like your desktop.
  * Open C:\Documents and Settings\Username\Application Data\Thunderbird\Profiles\randomHash.defaultprefs.js
  * Change  
user_pref("mail.identity.id1.sig_bottom", true)  
into  
user_pref("mail.identity.id1.sig_bottom", false)
  * There might be more user_pref("mail.identity.id1.sig_bottom", true) parameters depending on how many identities you have.
  * Save and reopen Thunderbird and see if this fixed your problem. If not, maybe double check that you changed each and every identity.
  * Do not try changing the position via the settings menu or it will revert to the default position.
Source: [MozillaZine](http://forums.mozillazine.org/viewtopic.php?f=39&t=270915&start=0&st=0&sk=t&sd=a)
