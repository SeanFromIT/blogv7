---
author: SeanFromIT
comments: true
date: 2007-05-05 04:09:00+00:00
layout: post
link: https://feeney.mba/2007/05/05/digg-and-del-icio-us-links-in-blogger/
slug: digg-and-del-icio-us-links-in-blogger
title: Digg and del.icio.us links in Blogger
wordpress_id: 275
categories:
- Blogger
- blogs
- del.icio.us
- Digg
- html
---

Ramani over on [Hackosphere](http://hackosphere.blogspot.com/2006/09/delicious-and-digg-hotlinks-for-your.html) has the code for generating digg and del.icio.us links in Blogger:  
  
Expand widget templates and find this:  
`  
<span class='post-labels'>  
 <b:if cond='data:post.labels'>  
   <data:postLabelsLabel/>  
     <b:loop values='data:post.labels' var='label'>  
       <a expr:href='data:label.url' rel='tag'>  
         <data:label.name/>  
       </a><b:if cond='data:label.isLast != "true"'>,</b:if>  
         </b:loop>  
       </b:if>  
`  
Then add this before the closing span tag:  
`  
 <a expr:href='"http://digg.com/submit?phase=2&url=" +   
     data:post.url + "&title=" + data:post.title'   
      target='_blank'>Digg this</a>  
 <a expr:href='"http://del.icio.us/post?url=" +   
     data:post.url + "&title=" + data:post.title'    
       target='_blank'>Add to del.icio.us</a>  
`  
  
You can easily modify that to add images for the links.
