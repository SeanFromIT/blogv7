---
author: SeanFromIT
comments: "true"
date: 2012-03-02 21:25:00+00:00
layout: post
link: https://feeney.mba/2012/03/02/reset-an-unknown-mp2-superuser-password/
slug: reset-an-unknown-mp2-superuser-password
title: Reset an unknown MP2 superuser password
wordpress_id: 87
categories:
- infor
- mp2
---

  
The built in administrator account for MP2 is SUPERUSER. There is no default password on the SUPERUSER account, but if someone set one and you don't know it:  
  
To access your MP2 using the SUPERUSER account, have the SQL Administrator run the following script on the MP2 database:  
  
**UPDATE MP2USER SET KEYWORD = '3MMM' WHERE USERID = 'SUPERUSER'**  
  
This will set the password to 111, which was also the default password out of the box.  
  
6.0 and prior supports Oracle. If you're using Oracle the statement may require a ; after the statement and possibly a COMMIT; statement as well. Other than that, the SQL syntax and table names are the same.  


  
Missing a SUPERUSER account? It's possible it's been renamed. Run the following to determine which accounts have similar permissions:  
  
**SELECT * FROM USERSITE WHERE ROLETYPE = 'S' AND ROLENAME = 'System Administrator';**
