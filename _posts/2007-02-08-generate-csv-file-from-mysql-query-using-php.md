---
author: SeanFromIT
comments: "true"
date: 2007-02-08 20:13:00+00:00
layout: post
link: https://feeney.mba/2007/02/08/generate-csv-file-from-mysql-query-using-php/
slug: generate-csv-file-from-mysql-query-using-php
title: Generate CSV file from MySQL query using PHP
wordpress_id: 322
categories:
- mysql
- php
---

This is an improvement upon the following two sources:  
http://shrimpworks.za.net/2005/08/02/dump-an-array-of-data-to-csv-with-php/  
http://codewalkers.com/archives/sqlhelp/2682.html  
  

    
    <br></br>// CSV Output Generation<br></br>  function arrayToCSV($data)<br></br>  {<br></br>   $csv = implode(',', array_keys($data[0]));<br></br>   $csv .= ',';<br></br>   for ($i = 0; $i < count($data); $i++) {<br></br>    $csv .= implode(',', $data[$i]);<br></br>    $csv .= ',';<br></br>   }<br></br>   return $csv;<br></br>  }<br></br>  $rarray = array();<br></br>  for($x = 0 ; $x < mysql_num_rows($result) ; $x++){<br></br>   $row = mysql_fetch_assoc($result);<br></br>   // Fields<br></br>   $dt = $row['DateTime'];<br></br>   $ct = $row['Case_Type'];<br></br>   $svp = $row['SVP_Rating'];<br></br>   $ab = $row['Abstract'];<br></br>   $rarray[$x] = (<br></br>   array<br></br>    (<br></br>    'DateTime' => "$dt",<br></br>    'Case_Type' => "$ct",<br></br>    'SVP_Rating' => "$svp",<br></br>    'Abstract' => "$ab"<br></br>    )<br></br>   );<br></br>  }<br></br>  header( "Content-type: application/octet-stream" );<br></br>  header( "Content-disposition: attachment; filename=POD-searchResults-".date("Y-m-d").".csv" );<br></br>  $buffer = trim( arrayToCSV( $rarray) );<br></br>  echo $buffer;<br></br>
