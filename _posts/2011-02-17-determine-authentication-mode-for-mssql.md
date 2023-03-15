---
author: SeanFromIT
comments: "true"
date: 2011-02-17 21:01:00+00:00
layout: post
link: https://feeney.mba/2011/02/17/determine-authentication-mode-for-mssql/
slug: determine-authentication-mode-for-mssql
title: Determine Authentication Mode for MSSQL
wordpress_id: 115
categories:
- Microsoft
- mssql
---

Check the **LoginMode** registry key. The path for this key for each version can be found below.  
  

    
    If the value is 1, it's Windows Authentication. If the value is 2, it's Mixed Mode Authentication.

  
  
For 2000: HKEY_LOCAL_MACHINESOFTWAREMicrosoftMicrosoft SQL Server' + @sqlpath + 'MSSQLServer  
  
For 2005: HKEY_LOCAL_MACHINESOFTWAREMicrosoftMicrosoft SQL ServerMSSQL.1MSSQLServer  
  
  
For 2008: HKEY_LOCAL_MACHINESOFTWAREMicrosoftMicrosoft SQL ServerMSSQL10_50.MSSQLSERVERMSSQLServer  

