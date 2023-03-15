---
author: SeanFromIT
comments: "true"
date: 2008-02-21 19:05:00+00:00
layout: post
link: https://feeney.mba/2008/02/21/copying-ms-project-server-production-databases-to-test-or-dev/
slug: copying-ms-project-server-production-databases-to-test-or-dev
title: Copying MS Project Server Production Databases to Test or Dev
wordpress_id: 204
categories:
- ms project server
- mssql
---

Copying the Microsoft Project databases from one box to another is not a simple task. MSSQL Export does not work. You have to make a backup of the production database, copy the .bak file over to the second box, and then "restore" those databases there.  

    
    select [Name],[Value] from projectserver_archive.sys.extended_properties<br></br>where class_desc = 'DATABASE'<br></br>GO<br></br>select [Name],[Value] from projectserver_draft.sys.extended_properties<br></br>where class_desc = 'DATABASE'<br></br>GO<br></br>select [Name],[Value] from projectserver_published.sys.extended_properties<br></br>where class_desc = 'DATABASE'<br></br>GO<br></br>select [Name],[Value] from projectserver_reporting.sys.extended_properties<br></br>where class_desc = 'DATABASE'<br></br>GO

  
After restoring, this query will give you the GUID of each database. If they don't match up, it won't work. If they do match up, you can go ahead and provision (or re-provision) a project server site using these databases. You just act like you're creating a new "site", enter in the database details, and it will sync up with what data already exists in them.
