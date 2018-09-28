---
author: SeanFromIT
comments: true
date: 2007-12-27 20:17:00+00:00
layout: post
link: https://feeney.mba/2007/12/27/find-a-corrupt-task-in-microsoft-project-server/
slug: find-a-corrupt-task-in-microsoft-project-server
title: Find a Corrupt Task in Microsoft Project Server
wordpress_id: 223
categories:
- Microsoft
- ms project server
- mssql
- scripts
- sql
---

The following SQL script may be run against your MSSQL database to find a Project Server task which has gone corrupt. Such corruption may lead to errors like "An unexpected error has occurred." Real helpful, Microsoft :-)  
  

    
    <br></br>USE projectserver_published<br></br>SELECT MSP_PROJECTS.PROJ_NAME, <br></br>     MSP_ASSIGNMENTS_SAVED.TASK_NAME, <br></br>     MSP_RESOURCES.RES_NAME, <br></br>     MSP_ASSIGNMENTS_SAVED.ASSN_UID, <br></br>     MSP_ASSIGNMENTS_SAVED.PROJ_UID, <br></br>     MSP_ASSIGNMENTS_SAVED.TASK_UID, <br></br>     MSP_ASSIGNMENTS_SAVED.RES_UID<br></br>FROM MSP_ASSIGNMENTS_SAVED INNER JOIN<br></br>     MSP_PROJECTS ON MSP_ASSIGNMENTS_SAVED.PROJ_UID = <br></br>MSP_PROJECTS.PROJ_UID INNER JOIN<br></br>     MSP_RESOURCES ON MSP_ASSIGNMENTS_SAVED.RES_UID =<br></br>MSP_RESOURCES.RES_UID<br></br>WHERE (NOT EXISTS<br></br>         (SELECT TASK_UID<br></br>             FROM MSP_TASKS_SAVED<br></br>             WHERE (TASK_UID = MSP_ASSIGNMENTS_SAVED.TASK_UID)))<br></br>
