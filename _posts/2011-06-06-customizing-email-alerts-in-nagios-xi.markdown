---
author: SeanFromIT
comments: true
date: 2011-06-06 18:58:00+00:00
layout: post
link: https://feeney.mba/2011/06/06/customizing-email-alerts-in-nagios-xi/
slug: customizing-email-alerts-in-nagios-xi
title: Customizing Email Alerts in Nagios XI
wordpress_id: 102
categories:
- monitoring
- nagios
- open source
---

In Nagios 3, you could define a custom "macro" on services or hosts with information to be included in host or service alert messages. You can still do this in XI, but the message template is now a part of each user's profile and you have to modify the related xi notification handler command.  
  
Here's how you can include additional macros from Nagios Core in your notification messages:  
  
1. For service notifications, modify the "xi_service_notification_handler" command and add the following to the end of the command definition:  
  
  --newvar="$_{SERVICE|HOST}SOMEMACRO$"  
  
...where $SOMEMACRO$ is a valid Nagios Core macro (either a standard macro or a custom macro).  This passes the Nagios Core $SOMEMACRO$ macro to Nagios XI as a "newvar" variable that can be used in service notifications. Custom macros are defined in the Free Variables section of the Misc tab on host and service definitions. When defining a custom macro, you leave out the SERVICE or HOST prefix in the free variable definition. That part is added automatically by Nagios before it is passed to the notification handler.  
  
2. In Nagios XI, go into your account page and select the "Notification Message" link.  Customize the "Service Alert Message" text to include the new variable (enclosed in % signs).  For example:  
  
  Custom Variable: %newvar%  
  
Note that the name of the variable in the notification message is "newvar" and that is will be replaced with the value of "$SOMEMACRO$" that you passed from Nagios Core to Nagios XI.  
  
Similar process for host notifications. You have to make this change to every profile (via masquerade) you want to receive the custom macro in their alert messages.  
  
Note: As of XI release 1.9, the xi_service_notification_handler and xi_host_notification_handler commands are overwritten during an upgrade. Be sure to backup these commands before an upgrade so you can re-implement them afterwards.
