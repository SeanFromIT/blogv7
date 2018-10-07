---
title: Wordpress to Jekyll Migration
author: SeanFromIT
comments: 'true'
layout: post
date: 2018-10-07 00:00:00 +0000
slug: wordpress-jekyll-migration
description: ''
image: ''
categories:
- web development
- web design

---
I am a reluctant adopter of the JAM stack. After all, JavaScript has been a part of _every_ stack for 20 years, Markup (in the form of HTML) for even longer, and APIs? Those are provided by my CMS of choice. Why do I need to migrate? Well, I think the clincher for most is that GitHub now offers free static website hosting, and it only supports Jekyll. That's a compelling, if coercive, reason.

Static website generators are nothing new. Long time readers of this blog may recall that 15 years ago I used a CMS called [Greymatter](https://en.wikipedia.org/wiki/Greymatter_(software) "Greymatter"){:target="_blank"}, back when Perl and CGIs were all the rage. Just as the greybeards before me, I've been in the industry long enough to watch an IT cycle come full circle.

In evaluating the decision to migrate, I went down several paths. [Forestry.io](https://forestry.io/ "Forestry"){:target="_blank"} supports Jekyll, Hugo, and VuePress but only offered a starter template for Jekyll. The CEO reached out to me and offered the [Hugo template](https://github.com/forestryio/hugo-demo "Hugo template"){:target="_blank"}. I'm writing this on Forestry, so it was the CMS that won out, but the templates were confusing. I ultimately tossed both and started from scratch, having been involved with more GitHub-hosted documentation sites than I'd like to admit from my time at Target.

I also tried Siteleaf, but it had no template and a 100MB limit (weird since static assets should be hosted in GitHub?) so it was eliminated quickly. I was impressed by Netlify, which has a [Netlify CMS](https://github.com/netlify/netlify-cms "Netlify CMS"){:target="_blank"}, but I just couldn't find what I was looking for in its [library of templates](https://templates.netlify.com/ "Netlify Templates"){:target="_blank"}.

So with a barebones site written from scratch for Liquid/Jekyll (the subset that works on GitHub, anyways), the next step was to find a way to migrate my Wordpress posts and assets. I had already taken down my Wordpress instance, so a plug-in like [Jekyll Exporter](https://wordpress.org/plugins/jekyll-exporter/ "Jekyll Expoter"){:target="_blank"} wasn't ideal. Luckily I stumbled across Christian Engvall's [post](https://www.christianengvall.se/switching-to-jekyll/ "Switching from Wordpress to Jekyll"){:target="_blank"} about [exitwp](https://github.com/thomasf/exitwp "exitwp"){:target="_blank"}. This tool will churn through your Wordpress backup/export file and create markdown files of each post. Bonus points for being written in Python.

Everyone's post-migration cleanup experience will be a little different depending on what kinds of HTML, JS, and plug-ins you may have been using in Wordpress. But there are some that will be obvious, like fixing links. You could emulate your /wp-content/ directory structure to avoid some of this if your domain name is not changing, but why? Jekyll prefers /assets/ with css, img, and js underneath it to optimize for CDNs. I chose to do that. So that involves combing through the generated markdown files looking not just for cross-post links, but img src's as well. \{\{ site.baseurl \}\} is your friend.

I noticed that YouTube embeds were stripped and replaced with two spaces. You'll need your original HTML to put these back in place. I also used a Google Docs embed plug-in that used `[embed]` tags. The tags remained, but without the plug-in do nothing, so I had to go pull the source embed HTML from each Google Doc and style appropriately to fit my new site.

I also used Amazon widgets extensively, but it turns out [these were deprecated in 2015](https://www.greenetea.com/no-more-amazon-widgets "No More Amazon Widgets"){:target="_blank"} so I didn't replace all of them. Superscripts, footnotes, and backslashes were stripped, so you'll need to restore accordingly (C:\\ becomes C: everywhere)! 

Blockquotes were fun. Since I often write about code, and Wordpress didn't have native code blocks, I used blockquotes or italics. However GitHub supports Linguist highlighting [for all sorts of languages](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml "Linguist languages"){:target="_blank"}, so I refactored those blocks accordingly. It was hit or miss whether exitwp decided to use `>` or `<blockquote>`. A blockquote within a blockquote really mucked things up.

Captions were similar. `[caption]` doesn't work with GitHub so I chose to double newline them with italics (`_`) around them. In some cases where margins mattered I used a `<br>` instead.

Which route did you go when exiting your Wordpress install? Put your experiences in the comments below.