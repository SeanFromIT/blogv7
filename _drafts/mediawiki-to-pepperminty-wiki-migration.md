---
author: SeanFromIT
comments: 'true'
layout: post
date: 2020-04-30 19:00:00 -0700
slug: mediawikitopepperminty
title: MediaWiki to Pepperminty Wiki Migration
description: ''
image: ''
categories:
- mediawiki
- wiki
- migration

---
Looking for a lighter weight wiki that might not break with every update, I stumbled upon [Pepperminty Wiki](https://starbeamrainbowlabs.com/labs/peppermint/__nightdocs/01-Welcome.html "Pepperminty Wiki"). It's an open-source project still early in development but seems better suited to novice wiki users than the similar concept, lightweight, single-page wiki, [TiddlyWiki](https://tiddlywiki.com/ "TiddlyWiki"). Most importantly, unlike TiddlyWiki, it's designed with a multi-user use case in mind.

Pepperminty, like many wikis these days, uses [markdown](https://www.markdownguide.org/ "Markdown"). Converting your MediaWiki content to markdown will make it more portable, whether you try Pepperminty or some other solution.

[Pandoc](https://pandoc.org/getting-started.html "Pandoc") is a useful tool for converting text file formats. There is an [online converter](https://pandoc.org/try/ "Try Pandoc"), but it isn't suitable for long text, and for any sufficiently large wiki you'll want to automate the conversion process anyways. So the first step is to [install pandoc](https://pandoc.org/installing.html "Install Pandoc") locally (or on your webserver, wherever you want to run this process).