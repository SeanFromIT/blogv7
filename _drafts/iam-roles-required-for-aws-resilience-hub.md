---
author: SeanFromIT
comments: 'true'
layout: post
date: 2023-01-20 18:10:00 -0700
slug: awsResilienceHubIAMPermissions
title: IAM Roles Required for AWS Resilience Hub
description: The AWS documentation is lacking so here's some Terraform
image: ''
categories:
- terraform
- aws
- iam
- security

---
AWS announced GA of Resilience Hub at re:Invent '21. However, it went GA without support for service-linked roles, and the service doesn't have a console button for creating the IAM roles it needs like some of the other new services do. The only documentation is [here](https://docs.aws.amazon.com/resilience-hub/latest/userguide/security-iam-resilience-hub-permissions.html "AWS Resilience Hub permissions reference") and it's not entirely clear. So I've written some Terraform to take care of this for you. You may need to modify it if your scenario differs.

The scenario: Multi-account architecture with IAM Identity Center (SSO). The users of a specific SSO permissions set will log in and point Resilience Hub at Terraform state files. The state files are generally centrally stored in S3, but the Terraform might deploy infra into any account within the AWS Organization. Also, they might have to do this in any account, because not everyone uses the central store.

We also use permissions boundaries to limit the reach of the permissions set. If you do as well, you need to either exclude these Resilience Hub roles from the boundary enforcement or add the boundary to them. 