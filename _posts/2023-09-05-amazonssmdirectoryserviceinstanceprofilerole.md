---
date: 2023-09-05T22:11:55.440Z
title: AmazonSSMDirectoryServiceInstanceProfileRole
description: What is the AmazonSSMDirectoryServiceInstanceProfileRole role?
comments: true
layout: post
---

If you try to launch a Directory Service administration EC2 instance, it takes you to a page with some input parameters. One of them says: "IAM instance profile name. By Default, if no instance profile exists with the name AmazonSSMDirectoryServiceInstanceProfileRole, an instance profile with the name AmazonSSMDirectoryServiceInstanceProfileRole will be created."\
\
However, depending on your environment, you might not be able to let it create this on your behalf, in which case you need to create it manually or offer an alternative role with equivalent permissions. Googling this role name finds no AWS documentation about it, but you can inspect the associated SSM Document ([AWS-CreateDSManagementInstance](https://us-east-1.console.aws.amazon.com/systems-manager/documents/AWS-CreateDSManagementInstance/description?region=us-east-1)) and you'll find that it requires two managed policies AmazonSSMManagedInstanceCore and AmazonSSMDirectoryServiceAccess, and an AssumeRole trust relationship to ec2.amazonaws.com. SSM Documents are not fun to wade through, so hopefully this helps someone else out there save some time.
