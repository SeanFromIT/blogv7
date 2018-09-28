---
author: SeanFromIT
comments: true
date: 2012-02-15 21:39:00+00:00
layout: post
link: https://feeney.mba/2012/02/15/passwords-in-nagios-xi-monitoring-wizards/
slug: passwords-in-nagios-xi-monitoring-wizards
title: Passwords in Nagios XI Monitoring Wizards
wordpress_id: 88
categories:
- nagios
- sys admin
---

The time may come when you may need to change the password for a host you setup in Nagios XI via a monitoring wizard. There is no way to do this via the web interface. Login to the XI server via ssh and browse to /usr/local/nagiosxi/etc/components/(WIZARD_NAME)/ and the username/password will be in a text file prefixed with the hostname.
