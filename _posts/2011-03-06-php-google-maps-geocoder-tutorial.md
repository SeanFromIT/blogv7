---
author: SeanFromIT
comments: "true"
date: 2011-03-06 06:18:00+00:00
layout: post
link: https://feeney.mba/2011/03/06/php-google-maps-geocoder-tutorial/
slug: php-google-maps-geocoder-tutorial
title: PHP Google Maps Geocoder Tutorial
wordpress_id: 113
categories:
- geocoding
- google
- maps
- mysql
- php
- xml
---

The goal of this tutorial is to plot a series of points on a map based on their addresses and optimize for viewing on an Android phone via the Android Browser.  
  
Background:  
"Geocoding" is the process of turning the addresses into their corresponding latitude and longitude coordinates, which can then be plotted on a map. Something to keep in mind is that your server is limited to 15,000 geocoding requests per day using the free Google geocoding service. If you have a large number of addresses to map, or expect a lot of traffic, you should cache the latitudes and longitudes in your database along with the addresses so that you don't hit this limit. Caching would also improve speed.  
  
Assumptions:  
You're comfortable accessing the addresses in your database and manipulating object-oriented PHP code.  
  
Before getting started, you need to [sign up for a Google Maps API key](http://code.google.com/apis/maps/signup.html).  
  
Helper classes which shouldn't need editing:  
point.php  
placemark.php  
  
Classes you need to edit:  
**genxml.php**  
At a minimum, insert your Google Maps API key on line 7, your database connection information on line 36, and your table name on line 40. Modify the SQL query to match your database and your needs, as well as the associative names in the while loop. You can also include more XML attributes for each address, which could then be printed out on their onClick pop-ups later on.  
**dmap.php**  
At a minimum, insert your Google Maps API key on line 8. If you added more XML attributes, add them to the createMarker function and define them in the GDownloadUrl inside function which reads the XML. If your application needs a zoom level less than 10, edit line 33.  
**geocoder.php**  
The only function you'll care to edit here is the lookup function (line 40). All of my addresses were for one city, so I appended the city and state to the end of the address before geocoding. You could just as easily read these out of your database. Just pass them as new arguments to the lookup function, update the $search string and, back in genxml.php, the call to the lookup function by $placemarks on line 18.  
  
What's going on here?  
Most of the tutorials I found online involved just JavaScript. Well you're not going to be reading values out of databases using JavaScript. The trick is the geocoding, which you need to put into XML format (or some other format that Google supports, like JSON) before you can map it. In this tutorial, this is done by genxml.php. Visit it in your browser to see what the XML output looks like. dmap.php reads the XML, outputs the map using JavaScript, and formats it for the Android Browser using CSS and the viewport meta tag. During the output process, a bounding polygon is drawn around the points which is then used to determine the optimal center point and zoom level.  
  
[Download the source files for this tutorial](https://github.com/SeanFromIT/tutorials/tree/master/gmaps)
  
Known Bugs:  
The pinch to zoom feature that we're all so used to with mobile Google Maps does not work properly in the Android browser. There is no known work around, but the word is that they're working on adding the feature in Android 2.3.  
  
Another thing to keep in mind is that this tutorial uses Google Maps API v2, which is depreciated but still supported. I would have used v3 but there weren't as many resources for it as for v2. You should probably look into using v3, especially if you want pinch to zoom to work whenever that Android update comes out.  
  
Sources:  
[Geocoding with PHP and the Google Maps API](http://www.phpriot.com/articles/google-maps-geocoding)  
[Using PHP/MySQL with Google Maps](http://code.google.com/apis/maps/articles/phpsqlajax.html)  
[Google Maps API v3: Developing for Mobile Devices](http://blogs.missouristate.edu/web/2010/05/12/google-maps-api-v3-developing-for-mobile-devices/)  
[Google Maps JavaScript API V2 Reference](http://code.google.com/apis/maps/documentation/javascript/v2/reference.html)
