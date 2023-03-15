---
author: SeanFromIT
comments: "true"
date: 2012-09-13 04:34:00+00:00
layout: post
link: https://feeney.mba/2012/09/13/troubleshooting-plex-on-ubuntu/
slug: troubleshooting-plex-on-ubuntu
title: Troubleshooting Plex on Ubuntu
wordpress_id: 81
categories:
- android
- Plex
- roku
- ubuntu
- video sharing
---

You may receive several errors when working with Plex on non-Windows devices. For example-  
  
Android: _There was a problem with media playback_  
Roku: _Video Unavailable_  
  
The general forum recommendation is to upload your logs.  
  
By default, you will find your logs in **/var/lib/plexmediaserver/Library/Application Support/Plex Media Server/Logs/**. If you changed Plex's install path by editing **/etc/default/plexediaserver**, change the prefix accordingly.  
  
Now let's save some time by first seeing if it's something simple going on. Let's shut down all your clients and restart the Plex server to cut down on the log clutter:  


<blockquote>sudo service plexmediaserver restart</blockquote>

  
This moves the old log to **/var/lib/plexmediaserver/Library/Application Support/Plex Media Server/Logs/Plex Media Server.old.log** and starts a new one. Let's actively tail the new log:  


<blockquote>tail -f "/var/lib/plexmediaserver/Library/Application Support/Plex Media Server/Logs/Plex Media Server.log"</blockquote>

  
Now start your Plex client up and try doing whatever you're trying to do again. You'll see the log changing in response to what you're doing. When your client throws the error, take note of what the log said at that point. Maybe your temp directory is missing? Some kind of file permission error? Try fixing it yourself, and when you can't figure it out anymore, post to the [forums](http://forums.plexapp.com/) along with the new log file.  
  
(Note: If after a few minutes after restarting the service your client still can't connect, try rebooting your server completely. No idea why this happens sometimes.)  
  
See also:  
[Plex on Ubuntu How-to](http://forums.plexapp.com/index.php/topic/26727-how-to-plex-media-server-on-ubuntu/)  
[Troubleshooting Playback Issues](http://forums.plexapp.com/index.php/topic/39820-troubleshooting-playback-issues/)  
  
If things work fine, and then one day they don't, Plex might have pushed an update that broke things. This will be identifiable in the logs by something like:  


<blockquote>ERROR - Caught exception starting plugin /var/lib/plexmediaserver/Library/Application Support/Plex Media Server/Plug-ins/System.bundle (Empty or non-existant file.)</blockquote>

  
This is fixed by deleting the System.bundle and Framework.bundle directories (by default in /var/lib/plexmediaserver/Library/Application Support/Plex Media Server/Plug-ins/) and restarting the plexmediaserver service.  
  
  

