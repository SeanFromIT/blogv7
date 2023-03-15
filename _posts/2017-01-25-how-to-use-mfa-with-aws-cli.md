---
author: SeanFromIT
comments: "true"
date: 2017-01-25 22:30:50+00:00
layout: post
link: https://feeney.mba/2017/01/25/how-to-use-mfa-with-aws-cli/
slug: how-to-use-mfa-with-aws-cli
title: How to use MFA with AWS CLI
wordpress_id: 848
categories:
- amazon
- cloud
- cloud computing
---

In order to use MFA with the AWS CLI, you need to use the STS service to generate temporary credentials. At the beginning of each day (by default, temporary credentials are good for 12 hours) you need to run the following:


```bash
aws sts get-session-token --serial-number arn:aws:iam::ACCOUNTNUMBER:mfa/IAMUSERNAME --token-code ###### > output.txt
```




This is the command for virtual tokens. Physical tokens have actual serial numbers. In this command, you would replace ACCOUNTNUMBER, IAMUSERNAME, and ###### appropriately, where ###### is the code from your virtual token.




Now open output.txt and run the following commands, replacing AAAAAA, BBBBBB, CCCCCC with the relevant values from output.txt. These are **Linux/Mac** export commands. For Windows use ‘set’ instead of ‘export’)





```bash
export AWS_ACCESS_KEY_ID=AAAAAA
export AWS_SECRET_ACCESS_KEY=BBBBBB
export AWS_SESSION_TOKEN=CCCCCC
```




As you might imagine, it would make life easier to script this out instead of doing it manually. output.txt is in JSON (unless you've configured your CLI output differently) for easy parsing.
