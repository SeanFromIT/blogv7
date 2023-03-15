---
author: SeanFromIT
comments: "true"
date: 2009-10-14 17:40:00+00:00
layout: post
link: https://feeney.mba/2009/10/14/ruby-gems-behind-proxy/
slug: ruby-gems-behind-proxy
title: Ruby Gems Behind Proxy
wordpress_id: 151
categories:
- gems
- ruby
- ruby on rails
---

Command line switches for Ruby Gems don't seem to work in the latest release. Running the following before you run the gem command on Windows seems to work:  


<blockquote>SET HTTP_PROXY=http://%USER%:%PASSWORD%@%SERVER%:%PORT%</blockquote>
