---
author: SeanFromIT
comments: true
date: 2011-09-28 18:43:00+00:00
layout: post
link: https://feeney.mba/2011/09/28/ibm-bladecenter-cisco-switch-default-password/
slug: ibm-bladecenter-cisco-switch-default-password
title: IBM BladeCenter Cisco Switch Default Password
wordpress_id: 94
categories:
- cisco
- IBM
- networking
---

For anyone else looking for this: the default credentials for the switch's web interface is no username, password **cisco**. You can then set a telnet password on the Advanced Settings tab of Configure-Express Setup. And set the enable password by going to /configure/-/enable/secret/0/SomePassword/CR where SomePassword is what you want to set it to.
