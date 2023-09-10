---
author: SeanFromIT
comments: "true"
date: 2017-09-10 20:50:45+00:00
layout: post
type: code
link: https://feeney.mba/2017/09/10/a-codepipeline-for-cross-account-cloudformation-deployment/
slug: a-codepipeline-for-cross-account-cloudformation-deployment
title: A CodePipeline for cross-account CloudFormation deployment
wordpress_id: 867
categories:
- AWS
- cloud
- cloud computing
- code
- DevOps
---

A best practice for modern application hosting is to run identical non-prod and prod environments. The prod environment should be locked down so that no manual changes can occur to it, reinforcing another best practice of making all infrastructure changes through code and promoting through a pipeline.

One AWS-native approach is to use CodePipeline for your infrastructure pipeline, CloudFormation (CFN) for your Infrastructure as Code, and CodeCommit as the git repo for this code. Doing so within the same account (such as across VPC) is trivial, but doing so across accounts requires some un(der)documented maneuvers. An example of this, using YAML CFN, is available on my [GitHub](https://github.com/SeanFromIT/Tools/tree/master/CFNCodePipeline).
