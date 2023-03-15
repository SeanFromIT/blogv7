---
author: SeanFromIT
comments: "true"
date: 2007-05-01 17:03:00+00:00
layout: post
link: https://feeney.mba/2007/05/01/random-facebook-photo-albums-php-include/
slug: random-facebook-photo-albums-php-include
title: Random Facebook Photo Albums PHP Include
wordpress_id: 285
categories:
- facebook
- html
- parsers
- php
- source code
- Web Widgets
---

I've written a simple little PHP program to grab random thumbnails from your public Facebook photo albums. Why? Because I was tired of maintaining multiple photo albums (one for my personal site, one for Facebook, one for MySpace, one for flickr, etc) that all had the same pictures. This at least lets you include your Facebook photos on your personal website or blog. I'm releasing it under [GPL](http://www.gnu.org/copyleft/gpl.html) licensing: you're free to use it, copy it, distribute it, all I ask is that if you use it you comment and let me know, and if you improve upon it let me know and I'll post your revisions here. There are many bugs so I'm sure some of you will want to fix them :-)  
  
I used a PHP HTML parser by Carlos Jordao available [here](http://www.weberdev.com/get_example-1817.html).  
  
TODO:  


  * Add caching to speed things up considerably.
  
  
`  
<?  
/*  
* facebookPhotos.php  
* Author: Sean Patrick Feeney  
* Email: feeneysp@rose-hulman.edu  
*  
* What it does:  
* - Connects to Facebook and grabs photo thumbnails  
*   from given public photo album URLs.  
* - It does not go through the Facebook API  
*   because that would require obscene authentication.  
* - Instead it uses HTTP-GET requests through  
*   PHP's file_get_contents command.  
*  
* Known issues:  
* - Occassionally doesn't do anything but slow your page.  
* - Some odd combination of album size and page number  
*   will mess up the links from time to time, but images  
*   are okay.  
*/  
///////////////////////////////////////////  
/*  
* Checks if another page exists in the given Facebook album  
*/  
function anotherPage($theURL, $page) {  
$newURL = $theURL . "&page=" . $page;  
$fbString = file_get_contents($newURL);  
$thePage = parseHtml($fbString);  
$imgCount = count($thePage["IMG"]);  
if ($imgCount < 2)   
 return false;  
else  
 return true;  
}  
///////////////////////////////////////////  
/*  
* Parses the page and pulls out <img> and <a> tags to be put into the img array.  
*/  
function getPage($theURL,$pageNum,$array,$width,$height) {  
try {  
 $facebookString = file_get_contents($theURL."&page=".$pageNum);  
 // Need to fix <a> tag URL's -- Facebook doesn't encode their URLs friendly enough  
 $fixedString = preg_replace("/pid=/", "pid=", $facebookString);  
 $fixedString = preg_replace("/&id=/", "&id=", $fixedString);  
 $fixedString = preg_replace("/&l=/", "&l=", $fixedString);  
 $thisPage = parseHtml($fixedString);  
 $imgCount = count($thisPage["IMG"]);  
 $count = 1;  
 $linkPlace;  
 $linkCount = count($thisPage["A"]);  
 // First image <a> tag -- at array index 15 for link count less than 40, 18 for above or for additional pages  
 // This assumption is likely the culprit behind links being messed up occassionally.  
 // More testing is needed.  
 if ($linkCount > 40 || $pageNum > 1)  
  $linkPlace = 17;  
 else  
  $linkPlace = 14;  
 while ($count < $imgCount) {  
  $thisLink = $linkPlace + $count;  
  array_push($array, "<a title='' href=" . $thisPage["A"][$thisLink]["HREF"] . "><img alt='Facebook Image' border='0' height='" . $height . "' src=" . $thisPage["IMG"][$count]["SRC"] . " /></a>");  
  $count++;  
 }  
 return $array;  
} catch (Exception $e) {  
 // Skip this URL  
}  
}  
///////////////////////////////////////////  
/*  
* Simple random number generator.  
*/  
function random($size) {  
 srand(time());  
 return (rand()%$size);  
}  
///////////////////////////////////////////  
/*  
* Pulls random albums or photos out of a list of album or photo URLs.  
*/  
function albumRandomizer($size,$array) {  
$albumCount = count($array);  
$returnArray = array();  
$usedNumbers = array();  
$loc = 1;  
// Main loop  
while ($loc <= $size) {  
 $random = random($albumCount);  
 if (!in_array($random, $usedNumbers)) {  
  $returnArray[$loc - 1] = $array[$random];  
  $loc++;  
  array_push($usedNumbers,$random);  
 }  
}  
return $returnArray;  
}  
///////////////////////////////////////////  
// User Variables  
  
// Number of photos to display. Changing this value won't affect speed that much.  
$photos = 3;  
  
// Number of albums to use.  
// If you're having speed and/or timeout issues, try fewer albums.  
$albums = 2;  
  
// Photo size, in pixels.  
$width = 130; // Isn't used right now, but it could be by editing getPage function.  
$height = 97;  
  
// Base public URLs for the Facebook photo albums.  
// Make sure your URL doesn't have &page=# in it --   
// use the URL listed as public at the bottom of your album page.  
$urlArray[0] = "http://rose-hulman.facebook.com/album.php?aid=2000544&l=56720&id=29201812";  
$urlArray[1] = "http://rose-hulman.facebook.com/album.php?aid=2007166&l=7cbc8&id=29201812";  
$urlArray[2] = "http://rose-hulman.facebook.com/album.php?aid=2006808&l=3df4a&id=29201812";  
$urlArray[3] = "http://rose-hulman.facebook.com/album.php?aid=2005852&l=e4d78&id=29201812";  
$urlArray[4] = "http://rose-hulman.facebook.com/album.php?aid=2003978&l=49c4b&id=29201812";  
$urlArray[5] = "http://rose-hulman.facebook.com/album.php?aid=2004843&l=0fe23&id=29201812";  
$urlArray[6] = "http://rose-hulman.facebook.com/album.php?aid=2004733&l=235f8&id=29201812";  
$urlArray[7] = "http://rose-hulman.facebook.com/album.php?aid=2000556&l=93830&id=29201812";  
$urlArray[0] = "http://rose-hulman.facebook.com/album.php?aid=2004139&l=8f958&id=29201812";  
$urlArray[1] = "http://rose-hulman.facebook.com/album.php?aid=2004138&l=ee2cc&id=29201812";  
$urlArray[2] = "http://rose-hulman.facebook.com/album.php?aid=2004137&l=2273a&id=29201812";  
$urlArray[3] = "http://rose-hulman.facebook.com/album.php?aid=2004135&l=ff7f8&id=29201812";  
$urlArray[4] = "http://rose-hulman.facebook.com/album.php?aid=2004134&l=e6467&id=29201812";  
$urlArray[13] = "http://rose-hulman.facebook.com/album.php?aid=2001024&l=12fa1&id=29201812";  
$urlArray[14] = "http://rose-hulman.facebook.com/album.php?aid=2000622&l=f4a1c&id=29201812";  
$urlArray[15] = "http://rose-hulman.facebook.com/album.php?aid=2000614&l=c2b10&id=29201812";  
$urlArray[16] = "http://rose-hulman.facebook.com/album.php?aid=2000613&l=5f18a&id=29201812";  
$urlArray[17] = "http://rose-hulman.facebook.com/album.php?aid=2000608&l=a3f27&id=29201812";  
$urlArray[18] = "http://rose-hulman.facebook.com/album.php?aid=2000607&l=ae91e&id=29201812";  
$urlArray[19] = "http://rose-hulman.facebook.com/album.php?aid=2000606&l=b9f49&id=29201812";  
$urlArray[20] = "http://rose-hulman.facebook.com/album.php?aid=2000604&l=1a64d&id=29201812";  
$urlArray[21] = "http://rose-hulman.facebook.com/album.php?aid=2000603&l=ffa4e&id=29201812";  
$urlArray[22] = "http://rose-hulman.facebook.com/album.php?aid=2000602&l=5a86c&id=29201812";  
$urlArray[23] = "http://rose-hulman.facebook.com/album.php?aid=2000559&l=6604a&id=29201812";  
$urlArray[24] = "http://rose-hulman.facebook.com/album.php?aid=2000555&l=5e6ef&id=29201812";  
///////////////////////////////////////////  
// Set environment -- Facebook only allows Mozilla, IE, Opera compatible  
$userAgent="Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)";  
@ini_set('user_agent', $userAgent);  
@ini_set('display_errors',"off"); // Yeah, I know this is bad. But it's better than bugging out and screwing up someone's page.  
// Global fields  
$pageNumber = 1;  
$done = false;  
$imgArray = array(); // Stores all image HTML  
  
// Main Program Starts Here  
$albumArray = albumRandomizer($albums + 1,$urlArray); // Albums to be used this time around  
foreach ($albumArray as $url) {  
 while (!$done) {  
  // Grab the page  
  $imgArray = getPage($url,$pageNumber,$imgArray,$width,$height);  
  $pageNumber++;  
  // Check for another page  
  $continue = anotherPage($url,$pageNumber);  
  if (!$continue) {  
   $done = true;  
  }   
 }  
 // Reset  
 $done = false;  
 $pageNumber = 1;  
}  
// Pick some random photos  
$finalArray = albumRandomizer($photos,$imgArray); // Stores just the images to be printed  
// Print images -- Edit this to make your photos display how you want them to.  
foreach ($finalArray as $picture) {  
 echo $picture;  
}  
///////////////////////////////////////////  
/*  
* parseHtml.php  
* Author: Carlos Costa Jordao  
* Email: carlosjordao@yahoo.com  
*  
* My notation of variables:  
* i_ = integer, ex: i_count  
* a_ = array, a_html  
* b_ = boolean,  
* s_ = string  
*  
* What it does:  
* - parses a html string and get the tags  
* - exceptions: html tags like <br> <hr> </a>, etc  
* - At the end, the array will look like this:  
* ["IMG"][0]["SRC"] = "xxx"  
* ["IMG"][1]["SRC"] = "xxx"  
* ["IMG"][1]["ALT"] = "xxx"  
* ["A"][0]["HREF"] = "xxx"  
*  
*/  
function parseHtml( $s_str ) {  
$i_indicatorL = 0;  
$i_indicatorR = 0;  
$s_tagOption = "";  
$i_arrayCounter = 0;  
$a_html = array();  
// Search for a tag in string  
while( is_int(($i_indicatorL=strpos($s_str,"<",$i_indicatorR))) ) {  
 // Get everything into tag...  
 $i_indicatorL++;  
 $i_indicatorR = strpos($s_str,">", $i_indicatorL);  
 $s_temp = substr($s_str, $i_indicatorL, ($i_indicatorR-$i_indicatorL) );  
 $a_tag = explode( ' ', $s_temp );  
 // Here we get the tag's name  
 list( ,$s_tagName,, ) = each($a_tag);  
 $s_tagName = strtoupper($s_tagName);  
 // Well, I am not interesting in <br>, </font> or anything else like that...  
 // So, this is false for tags without options.  
 $b_boolOptions = is_array(($s_tagOption=each($a_tag))) && $s_tagOption[1];  
 if( $b_boolOptions ) {  
  // Without this, we will mess up the array  
  $i_arrayCounter = (int)count($a_html[$s_tagName]);  
  // get the tag options, like src="htt://". Here, s_tagTokOption is 'src'  
  // and s_tagTokValue is '"http://"'  
  
  do {  
   $s_tagTokOption = strtoupper(strtok($s_tagOption[1], "="));  
   $s_tagTokValue = trim(strtok("="));  
   $a_html[$s_tagName][$i_arrayCounter][$s_tagTokOption] =  
   $s_tagTokValue;  
   $b_boolOptions = is_array(($s_tagOption=each($a_tag))) &&  
   $s_tagOption[1];  
  } while( $b_boolOptions );  
 }  
}  
return $a_html;  
}   
?>  
`
