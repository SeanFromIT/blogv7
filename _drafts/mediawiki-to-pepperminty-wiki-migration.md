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

Now we need the source content, the wiki markup, for each article in MediaWiki. You could copy and paste this from the "View source" tab on each page, but that's not very automated. There is a special page, index.php?title=Special:Export, that will allow you to export your content to XML. Or it should, but seeing as my MediaWiki install is mostly nonfunctional after recent updates, I had to explore another option. If you have command-line access to your MediaWiki server, in the maintenance folder you'll find a helper [dumpBackup.php](https://www.mediawiki.org/wiki/Manual:DumpBackup.php "dumpBackup"). This will also allow you to export to XML. I used a command similar to this:

    php dumpBackup.php --current > dump.xml

The relevant content is between the <page></page> tags in this dump. I chose to ignore titles _File:_ (images) and _Template:_ (MediaWiki style templates) for now, to focus on text migration.

I pulled each page's <text></text> field into a text file of its own with a .wiki extension. From there, we can run pandoc in an automated fashion. I'm doing this on a Windows box, so I wrote a PowerShell script, convert.ps1, to facilitate the conversion:

    $filePath = Get-ChildItem -Path ./ -File
    
    ForEach($i in $filePath){
      $file = (Get-Item $i).Basename
      $extension = (Get-Item $i).Extension
      # Exclude this script and your Mediawiki dump file
      if (($file -notmatch 'convert') -and ($extension -notmatch '.xml')){
        $sourceFile = $file+'.wiki'
        $destinationFile = $file+'.md'
        pandoc $sourceFile -f mediawiki -t markdown_phpextra -s -o $destinationFile
        if($LASTEXITCODE -ne 0){
          Write-Host 'Alert! ' -ForegroundColor Red -NoNewline
          Write-Host 'Error processing file: '+$i -BackgroundColor Yellow -ForegroundColor Black -NoNewline
        }
      }
    }

I exclude the script and dump file, in case you're doing this all in one directory. Turns out there isn't just one [markdown standard](http://www.joshuakehn.com/2014/9/5/markdown-and-standards.html "markdown standards").  The closest in wide usage is [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/ "GitHub Flavored Markdown"). Pepperminty uses PHP Parsedown Extreme, which is based on PHP Parsedown Extra, hence the choice of markdown_phpextra. 

A help page is provided as a starting point for confirming syntax support. With my source content, I ran into these issues that needed manually addressed:

* REDIRECT pages (syntax should become: _#REDIRECT \[\[New Page Name\]\]_ )
* Right floats (e.g. [TOCright](https://www.mediawiki.org/wiki/Template:TOCright "TOCright")) and other styled templates won't work. These will appear as _{=mediawiki}_
* {{quote}} template content disappeared completely during the conversion
* {{DEFAULTSORT}} is no longer relevant
* "wikilink" and InterLink: links need to be scrubbed
* There is no in-built reference system (<ref> tags). The cleanest solution I've found so far is to use superscript characters (¹²³⁴⁵⁶⁷⁸⁹⁰) and a simple numbered list at the end of the article.
* Categories should be replaced with tags (separate input field under the Edit field, comma separated)

Given that all those styled [transclusion](https://www.mediawiki.org/wiki/Transclusion "transclusion") templates likely won't work and in my case, I don't want to enable HTML support since this is meant to be a publicly editable site, I have to make some design choices. Since all of my images were in styled templates, this is where I make hard choices about whether or not I'll bring them over and how they should look on the page if I do. Note: Imagick is a required PHP extension to use image uploads in Pepperminty.

Now that the md files are in working order, theoretically, you could drop them in your Pepperminty folder and update navigation as needed, but I'm sure there are some additional steps necessary. For one, you'd need to duplicate each file to filename.md.r0 to simulate the first commit/revision. My wiki was small enough that manually uploaded images and pasted the md content into Pepperminty Wiki's new page GUI (I know, I know, what happened to automation?).

Mad props to [@SBRLabs](https://twitter.com/SBRLabs "@sbrl") for sharing this tech with the world.

Which route did you go when exiting your MediaWiki install? Put your experiences in the comments below.