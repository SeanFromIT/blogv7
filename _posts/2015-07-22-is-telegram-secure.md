---
author: SeanFromIT
link: 'https://feeney.mba/2015/07/22/is-telegram-secure/'
slug: is-telegram-secure
wordpress_id: 471
date: 2015-07-22T05:49:11.000Z
title: Is Telegram Secure?
categories:
  - android
  - cellphone
  - encryption
  - freeware
  - information security
  - Infosec
  - instant messaging
  - iphone
  - open source
  - Security
comments: true
layout: post
---

Security is based on trust. Many apps have tried to bring secure messaging to mobile communications, but been caught misleading users about their security process ([Snapchat](http://www.nytimes.com/2014/05/09/technology/snapchat-reaches-settlement-with-federal-trade-commission.html?_r=0)) or been put in a questionable positions by their home governments ([KakaoTalk](https://www.techinasia.com/10-best-secure-messaging-apps/)). *\[Update 2018: Telegram was also put in such a situation, but [resisted](https://www.forbes.com/sites/kenrapoza/2018/04/19/how-messaging-app-telegram-gets-around-russias-ban/).]*

If disappearing messages are sufficient for you, Mark Cuban-supported Cyber Dust might be a good fit. It keeps messages only in device memory and no one has cracked its encryption yet, as far as we know. It also claims that with the exception of verified public users (celebrities, companies, etc.) it's impossible to "prove" that someone really sent a message (making screenshots/scraping potentially useless).

But what if that isn't enough? Open source, cross-platform competitor Telegram is gaining momentum. It features in-transit encryption, built-in passcode startup protection, and persistent messaging options in addition to the popular timed messages. [But it is vulnerable at the device level](http://blog.zimperium.com/telegram-hack/) - like if someone steals your phone and breaks into the OS, or if your phone is successfully attacked remotely (as [Wikileaks revealed](https://wikileaks.org/ciav7p1/) the CIA can do to Android). Telegram does not use in-memory or data-at-rest encryption.

The pass-code also isn't sufficient protection from OS behavior. In the Android version, failure to manually close the app can leave a picture of the last message you were looking at in the task history (what you see when you hit the hardware Menu button) *\[Update 5/21/17: Screenshots are now disabled by default which also prevents the task history image. You can override this in Settings-Privacy and Security-Passcode Lock, but why would you want to?].* Photos taken in the app are stored on disk in a Telegram folder, which can be automatically picked up by the Android Photos app and if you're not careful, any automatic cloud photo backup solution you use. Be sure to disable the folder's inclusion in those programs and consider [adding a .nomedia file](https://lifehacker.com/5793803/disable-media-scanning-in-specific-android-directories-by-creating-a-nomedia-file) to it.

Sometimes you really do get what you pay for. It seems if you want truly secure messaging, one of the subscription-based services might be the way to go. Silent Circle is one such popular, cross-platform service. This is what comes by default with the Android [blackphone](http://techcrunch.com/2014/02/26/close-look-at-blackphone/), the civilian version of what many governments use. There are free apps using the same tech stack as Silent Circle: Signal/RedPhone and TextSecure (now used by Facebook's WhatsApp), but they do not yet have full iOS support *\[Update 8/29/16: Looks like Signal now has iOS support]*. [Here's a good article on the security of Silent Circle and Redphone](http://blog.cryptographyengineering.com/2013/03/here-come-encryption-apps.html). WhatsApp has been caught [not properly deleting data](https://techcrunch.com/2016/07/29/research-shows-deleted-whatsapp-messages-arent-actually-deleted/) at the device level, but I'm not sure if that also applies to RedPhone/TextSecure. Signal's Android version is susceptible at the device level just like Telegram.

The EFF maintains a [scorecard](https://www.eff.org/secure-messaging-scorecard) for many secure messaging apps. It isn't comprehensive, but it does give Telegram's secret chat feature full marks, as well as Silent Circle and RedPhone/TextSecure. Unsurprisingly Snapchat fails the scorecard miserably.

\[Update 5/29/25: Telegram announced a partnership with a questionable government agent's AI company, so you should assume its content is compromised.] 
