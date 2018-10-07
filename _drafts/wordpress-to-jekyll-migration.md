---
title: Wordpress to Jekyll Migration
author: SeanFromIT
comments: 'true'
layout: post
date: 2018-10-07 00:00:00 +0000
slug: wordpress-jekyll-migration

---
I am a reluctant adopter of the JAM stack. After all, JavaScript has been a part of _every_ stack for 20 years, Markup (in the form of HTML) for even longer, and APIs? Those are provided by my CMS of choice. Why do I need to migrate? Well, I think the clincher for most is that GitHub now offers free static website hosting, and it only supports Jekyll. That's a compelling, if coercive, reason.

Static website generators are nothing new. Long time readers of this blog may recall that 15 years ago I used a CMS called [Greymatter](https://en.wikipedia.org/wiki/Greymatter_(software) "Greymatter"), back when Perl and CGIs were all the rage. Just as the greybeards before me, I've been in the industry long enough to watch an IT cycle come full circle. 

In evaluating the decision to migrate, I went down several paths. [Forestry.io](https://forestry.io/ "Forestry") supports Jekyll, Hugo, and VuePress but only offered a starter template for Jekyll. The CEO reached out to me and offered the [Hugo template](https://github.com/forestryio/hugo-demo "Hugo template"). I'm writing this on Forestry, so it was the CMS that won out, but the templates were confusing. I ultimately tossed both and started from scratch, having been involved with more GitHub-hosted documentation sites than I'd like to admit from my time at Target.

I also tried Siteleaf, but it had no template and a 100MB limit (weird since static assets should be hosted in GitHub?) so it was eliminated quickly. I was impressed by Netlify, which has a [Netlify CMS](https://github.com/netlify/netlify-cms "Netlify CMS"), but I just couldn't find what I was looking for in its [library of templates](https://templates.netlify.com/ "Netlify Templates").

So with a barebones site written for Liquid/Jekyll (the subset that works on GitHub, anyways), the next step was to find a way to migrate my Wordpress posts and assets. 