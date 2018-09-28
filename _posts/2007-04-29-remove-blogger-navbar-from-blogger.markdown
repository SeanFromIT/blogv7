---
author: SeanFromIT
comments: true
date: 2007-04-29 15:42:00+00:00
layout: post
link: https://feeney.mba/2007/04/29/remove-blogger-navbar-from-blogger/
slug: remove-blogger-navbar-from-blogger
title: Remove Blogger navbar from Blogger
wordpress_id: 290
categories:
- Blogger
- blogs
- css
---

Since the Blogger beta is now no longer in beta, [this is](http://godproposes.blogspot.com/2006/10/how-to-remove-blogger-navbar.html) the only good, standards compliant way to remove the top bar from Blogger blogs:  
  
`  
<style type="text/css">  
#navbar-iframe {  
height:0px;  
visibility:hidden;  
display:none;  
}  
</style>`
