---
author: SeanFromIT
comments: "true"
date: 2007-06-26 16:41:00+00:00
layout: post
link: https://feeney.mba/2007/06/26/changing-the-binding-order-of-network-adapters-in-vista/
slug: changing-the-binding-order-of-network-adapters-in-vista
title: Changing the binding order of network adapters in Vista
wordpress_id: 249
categories:
- networking
- Windows Vista
---

Some people may notice a problem with the Vista built-in VPN client: It says you have no active Internet connection even though you do. One solution is to re-order any loopback adapters (often installed by VMWare, AFS, etc) to the bottom of the network adapter bindings. You can do this as follows:  
  
Change the binding order of network adapters or disable extra network adapters  
1. On Windows Vista, click the Start button, type ncpa.cpl, and then press ENTER.  
  
2. On the Advanced menu, click Advanced Settings.  
  
Note: If you are using Windows Vista and you do not see the Advanced menu, press ALT. The menu bar will appear.  
  
At this point, Windows Vista needs your permission to continue.  
  
3. On the Adapters and Bindings tab in the Connections area, select the connection that you want to move up in the list. Use the arrow buttons to move the connection.  
  
Notes  
•The Adapters and Bindings tab lists the connections in the order in which the connections are accessed by network services. The order of these connections reflects the order in which TCP/IP or the next available protocol is bound to the network adapters. The bindings for remote access connections apply to all remote access connections.  
•The Provider Order tab lists the network providers for this computer. You can use the arrow buttons to change the order in which these providers are accessed. You can arrange the order in which the computer accesses information about the network. Providers and other connections are accessed in the order in which the providers and the connections are listed.
