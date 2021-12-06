---
author: SeanFromIT
comments: 'true'
layout: post
date: 2020-10-09 18:00:00 -0700
slug: refreshable-aws-boto-credentials
title: Auto-refresh of boto3 AWS session in 2020
description: How to auto-refresh a boto3 session when the role has an insufficient
  session duration limit
image: ''
categories:
- aws
- " python"

---
In a sufficiently large AWS environment, it's not unusual that a boto3 script may need to run for a long time. However, long runs can lead to timeouts. One solution is to increase the maximum session duration of an assumed role. But what if that's not an option?

Turns out that by dropping into botocore, you can implement refreshable credentials that will auto-renew as needed. This will prevent timeouts while keeping your security team happy.

This example works for a multi-account, multi-region AWS architecture where a different - but identically named - role is assumed in each account with the IAM permissions necessary for my boto3 method calls. I use a [named profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html "named profile") with permission to do the assume role.

    import botocore, boto3, datetime
    from botocore.session import get_session
    
    accounts = [
        {"name": "Account1", "id": "123456789000"},
        {"name": "Account2", "id": "987654321000"}
    ]
    
    regions = [ "us-east-1", "us-east-2" ]
    
    # Replace myRole with your local named profile
    boto3.setup_default_session(profile_name='myRole')
    
    # 3600 seconds in an hour, this value should match your role's
    # maximum session duration (AWS default is 1 hour). If you're
    # role chaining (e.g. saml2aws) 1 hour is a hard limit.
    def refresh_external_credentials():
        # Assume role, get details
        client = boto3.client('sts')
        credentials = client.assume_role(
            RoleArn=roleArn,
            RoleSessionName="thisNameMattersNot",
            DurationSeconds=3600
        ).get("Credentials")
        return {
            "access_key": credentials.get('AccessKeyId'),
            "secret_key": credentials.get('SecretAccessKey'),
            "token": credentials.get('SessionToken'),
            "expiry_time": credentials.get('Expiration').isoformat()
        }
    
    roleArn = ''
    
    for account in accounts:
        id = account.get('id')
        accountName = account.get('name')
        
        # Replace roleToAssume with your target role
        roleArn = 'arn:aws:iam::' + str(id) + ':role/roleToAssume'
        
        credentials = botocore.credentials.RefreshableCredentials.create_from_metadata(
            metadata=refresh_external_credentials(),
            refresh_using=refresh_external_credentials,
            method="sts-assume-role",
        )
        
        for region in regions:
            session = get_session()
            session._credentials = credentials
            session.set_config_variable("region", region)
            autorefresh_session = boto3.session.Session(botocore_session=session)
            
            # Your boto3 calls, for example...
            rds = autorefresh_session.client('rds')
            databases = rds.describe_db_instances()
            
            # ...

This code also available on my [GitHub](https://github.com/SeanFromIT/Tools/blob/master/boto_refreshablecredentials.py "this code on GitHub").

Many thanks to the trailblazers:

* [https://dev.to/li_chastina/auto-refresh-aws-tokens-using-iam-role-and-boto3-2cjf](https://dev.to/li_chastina/auto-refresh-aws-tokens-using-iam-role-and-boto3-2cjf "https://dev.to/li_chastina/auto-refresh-aws-tokens-using-iam-role-and-boto3-2cjf")
* [https://www.owenrumney.co.uk/implementing-refreshingawscredentials-python/](https://www.owenrumney.co.uk/implementing-refreshingawscredentials-python/ "https://www.owenrumney.co.uk/implementing-refreshingawscredentials-python/")
* [https://pritul95.github.io/blogs/boto3/2020/08/01/refreshable-boto3-session/](https://pritul95.github.io/blogs/boto3/2020/08/01/refreshable-boto3-session/ "https://pritul95.github.io/blogs/boto3/2020/08/01/refreshable-boto3-session/")
