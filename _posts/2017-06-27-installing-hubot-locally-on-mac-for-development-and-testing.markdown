---
author: SeanFromIT
comments: true
date: 2017-06-27 22:02:23+00:00
layout: post
link: https://feeney.mba/2017/06/27/installing-hubot-locally-on-mac-for-development-and-testing/
slug: installing-hubot-locally-on-mac-for-development-and-testing
title: Installing Hubot locally on Mac for development and testing
wordpress_id: 863
---

It seems Hubot has changed things recently and I couldn't get any of the existing online tutorials to work. Here's what I got working:

```bash
brew install node coffeescript redis
brew services start redis
npm install -g generator-hubot yo
mkdir hubot && cd hubot
yo hubot
```

From there you enter some details and it spits out a working config. Note that this will restart redis after reboot. If you don't want that functionality you can replace the _brew services_ command with _redis-server /usr/local/etc/redis.conf_.
