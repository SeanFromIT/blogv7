---
author: SeanFromIT
comments: true
date: 2012-01-10 14:53:00+00:00
layout: post
link: https://feeney.mba/2012/01/10/unconfigured-named-mssql-instance/
slug: unconfigured-named-mssql-instance
title: Unconfigured Named MSSQL Instance
wordpress_id: 89
categories:
- mssql
---

If your installation errors out half way through, you may wind up with an unconfigured named instance. Short of uninstalling all of Microsoft SQL, you'll have to manually remove the instance in order to re-use the name.  
  
Use _regedit_ to find the following key:  
`HKEY_LOCAL_MACHINESOFTWAREMicrosoftMicrosoft SQL Server`
  
  
Under **Instance NamesSQL**, delete the value corresponding to your unconfigured instance. Now look for the corresponding** MSSQLxx_xx.InstanceName** key and delete it.  
  
You will also want to delete the corresponding instance folder, the default path would be C:\Program Files\Microsoft SQL Server\MSSQLxx_xx.InstanceName.
