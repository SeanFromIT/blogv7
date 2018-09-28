---
author: SeanFromIT
comments: true
date: 2011-03-15 13:42:00+00:00
layout: post
link: https://feeney.mba/2011/03/15/change-keyboard-language-at-windows-2008-login-screen/
slug: change-keyboard-language-at-windows-2008-login-screen
title: Change Keyboard Language At Windows 2008 Login Screen
wordpress_id: 111
categories:
- localization
- Microsoft
- Windows Server 2008
---

If you're only given one keyboard layout option at the Windows login screen, and it's not English but you need some special characters only available on the English layout, login via RDP (which will allow you to pass the correct characters from your client) and fix the following registry key:  


<blockquote>[HKEY_USERS.DEFAULTKeyboard LayoutPreload]</blockquote>

You should see string values like:   


<blockquote>"1"="00000407"  
"2"="00000409"</blockquote>

407 = german, 409 = us, etc. You can add more languages 3, 4, 5, etc.  Now at the login screen press CTRL+ALT+DEL. When you click [Options] you see the default language from key 1 (in this example DE) in the lower left corner. When you Press ALT+SHIFT you can switch all languages you have defined under this registry key.  [via TechArena](http://forums.techarena.in/windows-server-help/797434.htm)
