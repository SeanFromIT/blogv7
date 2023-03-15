---
author: SeanFromIT
comments: "true"
date: 2008-11-27 09:01:00+00:00
layout: post
link: https://feeney.mba/2008/11/27/top-posts-widget-by-postrank/
slug: top-posts-widget-by-postrank
title: Top Posts Widget by PostRank
wordpress_id: 181
categories:
- blogging
- PostRank
- scripts
- Web Widgets
---

I was having trouble finding the code for the top posts widget by [PostRank](http://www.postrank.com/) so I've included it, along with instructions, below:  


  1. Go to [PostRank](http://www.postrank.com/) and enter your RSS feed address into the Analyze box at the top of the site. You'll likely get an error that this URL has never been entered before, just wait a few minutes for it to build an index and try again.
  2. On the Feed Detail page, click the RSS looking button on the right.  
  
  


[![]({{ site.baseurl }}/assets/img/2008/11/postrank1-300x72.jpg)]({{ site.baseurl }}/assets/img/2008/11/postrank1.jpg)

  3. Note the unique hash that pops up, circled above.
  4. Go to the following URL, replacing {YOUR HASH} with your actual hash:  
http://api.postrank.com/v2/feed/{YOUR HASH}/info?format=xml&appkey=postrank.com/example  

  5. On the page that loads, note your unique feed id, which comes up right after your hash and before your URL.  
  
  
  


[![]({{ site.baseurl }}/assets/img/2008/11/postrank2-300x38.jpg)]({{ site.baseurl }}/assets/img/2008/11/postrank2.jpg)

  6. Use the following code, replacing {FEED ID} with your actual feed id, 'year' with the time period you would like (year, month, week, day), and 10 with the number of records to return:

<blockquote><div id="aidewidget"></div>  <script type="text/javascript" src="http://api.aiderss.com/static/top_posts.js">  </script>  <script type="text/javascript">  new AideWidget('aidewidget', {FEED ID}, 'year', 10); </script> <br></div> </blockquote>
