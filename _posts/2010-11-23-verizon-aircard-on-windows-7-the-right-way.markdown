---
author: SeanFromIT
comments: true
date: 2010-11-23 20:05:00+00:00
layout: post
link: https://feeney.mba/2010/11/23/verizon-aircard-on-windows-7-the-right-way/
slug: verizon-aircard-on-windows-7-the-right-way
title: Verizon Aircard on Windows 7 The Right Way
wordpress_id: 122
categories:
- cellphone
- verizon
---

Instructions for Pantech UMW190NCD (and possibly others):  


  1. Download latest VZAccess Manager at [http://www.vzam.net/download/download.aspx?productid=728](http://www.vzam.net/download/download.aspx?productid=728)
  2. Enable your computer to download drivers from Windows Update automatically.
  3. (If you already installed a previous version of VZAccess Manager, for example off of the card itself) Uninstall everything from Verizon, Smith Micro, and Pantech.
  4. While connected to the Internet, install VZAccess Manager (but don't open it afterwards). When it's done installing, plug in your card and watch the progress of the Windows driver installation. 15-20 minutes later, 7 or 8 drivers will have downloaded and installed, a few may have not installed, that's OK. Click Close.
  5. Control Panel - Network and Sharing Center - Set up a New Connection or Network - Dial-Up Connection
    1. Phone number: #777
    2. Username: Your card's data plan phone number followed by @vzw3g.com.  For example, "1112223333@vzw3g.com".
    3. Password: Your card's data plan phone number. For example, 1112223333
    4. Connection Name: Something you'll remember. For example, "VZ Wireless".
    5. Assuming you have a signal where you're at, a connection test will happen and hopefully be successful. You can disconnect/reconnect in the future by selecting your new dial-up connection in the system tray (next to the clock). It will be above your normal wireless network choices when you click the wireless signal bar in the tray.
[Source](http://phones.verizonwireless.com/droid/community/viewThread.aspx?id=156544&category=apps)  
  
**Change of number on your device?**  
  
Now you'll have to open the VZAccess Manager program and after it detects your card, go to Options-Activation. If it doesn't work, call support and ask for a Tier 2 rep. Unplug the card and ask them to "refresh" the account on their network to pick up the new number. If that doesn't work, make sure the ESN in their system matches your device. Do this by pressing CTRL+D in VZAccess Manager and entering password 000000.  To manually activate, use this screen and enter activation code 000000. Enter your new phone number in both the phone number field and the IMSI (MIN) field. For me the SID was 80, but your rep can confirm. PRL (preferred roaming list) was left blank. After this is activation is successful, try the Options-Activation again so it can pick up the PRL info. This will also update the Verizon system with the activation date.  
  
Don't forget to change your username to use your new number in your "dial-up" connection properties.  

