---
author: SeanFromIT
comments: "true"
date: 2011-11-17 19:08:00+00:00
layout: post
link: https://feeney.mba/2011/11/17/export-users-passwords-server-roles-from-mssql-2005-to-mssql-2008/
slug: export-users-passwords-server-roles-from-mssql-2005-to-mssql-2008
title: Export Users, Passwords, Server Roles from MSSQL 2005 to MSSQL 2008
wordpress_id: 93
categories:
- Microsoft
- mssql
- scripts
- sql
---

Microsoft provides a useful script to export users and passwords between the two versions: [http://support.microsoft.com/kb/918992](http://support.microsoft.com/kb/918992)  
  
But it does not transfer the server roles. To do that, you'll need to use the following script:  


DECLARE @cmd varchar(max)  
DECLARE @SERVERROLE VARCHAR(100)  
DECLARE @MEMBERNAME VARCHAR(100)

CREATE TABLE ##SRV_Roles  
(  
SERVERROLE VARCHAR(100),  
MEMBERNAME VARCHAR(100),  
MEMBERSID VARBINARY (85)  
)  


/*GET SERVER ROLES INTO TEMPORARY TABLE*/  
SET @CMD = '[MASTER].[DBO].[SP_HELPSRVROLEMEMBER]'  
INSERT INTO ##SRV_Roles EXEC (@CMD)

DECLARE SERVER_ROLES CURSOR FOR  
Select SERVERROLE ,  
MEMBERNAME  
FROM ##SRV_Roles

OPEN SERVER_ROLES  
FETCH NEXT FROM SERVER_ROLES into @SERVERROLE,@MEMBERNAME

WHILE (@@fetch_status =0)  
BEGIN  
Set @CMD = ''  
Select @CMD = @CMD + 'EXEC MASTER.DBO.sp_addsrvrolemember @loginame = ' + char(39) + @MEMBERNAME + char(39) + ', @rolename = ' + char(39) + @SERVERROLE + char(39) + char(10) + 'GO' + char(10)  
--from ##SRV_Roles --where MemberName = @DatabaseUserName  
Print '--Login:' + @MEMBERNAME  
Print @CMD  
FETCH NEXT FROM SERVER_ROLES into @SERVERROLE,@MEMBERNAME  
END

CLOSE SERVER_ROLES  
DEALLOCATE SERVER_ROLES  
  
Drop table ##SRV_Roles

Be sure to comment out the very first login for 'sa' as you cannot modify its roles.  
  
[Source](http://social.msdn.microsoft.com/Forums/en-US/transactsql/thread/5486ec6b-ee6f-47fb-b1e0-61ba731ad970/)
