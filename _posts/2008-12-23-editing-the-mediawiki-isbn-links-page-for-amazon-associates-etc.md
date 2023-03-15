---
author: SeanFromIT
comments: "true"
date: 2008-12-23 00:52:00+00:00
layout: post
link: https://feeney.mba/2008/12/23/editing-the-mediawiki-isbn-links-page-for-amazon-associates-etc/
slug: editing-the-mediawiki-isbn-links-page-for-amazon-associates-etc
title: Editing the MediaWiki ISBN Links Page (For Amazon Associates, etc)
wordpress_id: 174
categories:
- amazon
- books
- mediawiki
---

By default, MediaWiki links anything "ISBN xxxxxxxxxx" to Special:Booksources/xxxxxxxxxx, which has links to various stores where the visitor could buy that book. You probably want to monetize this by changing the Amazon link to include your Associates referral code. Here's how you do it:  


  * Figure our what your "namespace" is. At the bottom of every MediaWiki page, it says "About xxx". xxx is your namespace.
  * Go to (your MediaWiki url and title scheme)/(your namespace):Book sources. Change the links to your liking, using MAGICNUMBER (all caps!) where ever you need the ISBN inserted. Save and test.

If you don't like using the Book sources page, you can change it by editing the contents of MediaWiki:Booksources.
