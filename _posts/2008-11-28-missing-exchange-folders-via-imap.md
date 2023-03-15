---
author: SeanFromIT
comments: "true"
date: 2008-11-28 06:56:00+00:00
layout: post
link: https://feeney.mba/2008/11/28/missing-exchange-folders-via-imap/
slug: missing-exchange-folders-via-imap
title: Missing Exchange Folders via IMAP
wordpress_id: 180
categories:
- e-mail systems
- exchange
- mozilla
- tutorials
---

Sometimes when you use IMAP to access e-mail from multiple e-mail clients, like Outlook and Thunderbird, some mail folders show up while others do not. This is due to IMAP "subscriptions" - the client tries to automatically pick the right folders but usually fails. Here are fixes:  
  
Outlook:  


  1. Right click on your Exchange Inbox and select "IMAP Folders."
  2. Uncheck the "Show only subscribed folders" box found at the bottom of the window.  

  3. Click OK and all of your folders should show.

Thunderbird:

  1. Go to File > Subscribe.  

  2. Place a check next to the folders you'd like, and click "Subscribe."
  3. Click OK.
