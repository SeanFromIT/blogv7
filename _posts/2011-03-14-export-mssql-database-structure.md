---
author: SeanFromIT
comments: "true"
date: 2011-03-14 17:46:00+00:00
layout: post
link: https://feeney.mba/2011/03/14/export-mssql-database-structure/
slug: export-mssql-database-structure
title: Export MSSQL Database Structure
wordpress_id: 112
categories:
- mssql
---

Right click the database in Management Studio and select Tasks-**Generate Scripts**. Run through the wizard, selecting what you want exported. Assuming you only want the structure, without data, in the Scripting Options tab click Advanced and make sure that General-**Types of data to script** is set to **Schema only**. You can save to file, clipboard, or a new query window.
