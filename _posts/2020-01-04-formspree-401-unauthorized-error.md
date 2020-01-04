---
author: SeanFromIT
comments: 'true'
layout: post
date: 2020-01-04 00:00:00 -0600
slug: formspree-401-error
title: Formspree 401 Unauthorized Error
description: How to fix Formspree HTTP 401 error
image: ''
categories: []

---
Trying Formspree, my AJAX form wasn't reaching the success function. Using Chrome Developer tools, I just saw:

![](/assets/img/2020/chromeDebug.JPG)

Searching Formspree's Help Site for "401" turned up nada. So I switched to Firefox Developer tools, Network tab, and inspected the Response.

![](/assets/img/2020/firefoxDebug.JPG)

Aha! But I actually do want reCAPTCHA spam protection. Luckily I stumbled across this [ZEIT guide](https://zeit.co/guides/deploying-react-forms-using-formspree-with-zeit-now "Deploying React Forms Using Formspree with ZEIT Now") that says: "To use AJAX on Formspree you must either disable reCAPTCHA or provide your own reCAPTCHA key."

Much better! I do have my own reCAPTCHA key, and I was able to implement it per [Formspree instructions](https://help.formspree.io/hc/en-us/articles/360022811154-Adding-a-custom-reCAPTCHA-key "Adding a custom reCAPTCHA key").

This one wasn't a quick Google to fix so hopefully this helps someone else running into this issue.
