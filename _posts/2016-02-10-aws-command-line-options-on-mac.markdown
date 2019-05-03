---
author: SeanFromIT
comments: true
date: 2016-02-10 20:19:42+00:00
layout: post
link: https://feeney.mba/2016/02/10/aws-command-line-options-on-mac/
slug: aws-command-line-options-on-mac
title: AWS Command Line Options on Mac
wordpress_id: 533
categories:
- amazon
- apple
- cloud
- cloud computing
---

**AWS Shell**:

```bash
sudo easy_install pip
sudo pip install aws-shell --upgrade --ignore-installed six
aws-shell
```

**AWS CLI**:

```bash
wget https://s3.amazonaws.com/aws-cli/awscli-bundle.zip
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
aws
```

[AWS CLI Initial Setup](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

**EB CLI** (Elastic Beanstalk):


`pip install awsebcli --upgrade --user`


_You may be prompted to install Developer Tools, after which you'll need to run this command again. _

[EB CLI Initial Setup](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-configuration.html)

You may also be interested in: [How to use MFA with AWS CLI]({{ site.baseurl }}/how-to-use-mfa-with-aws-cli.html)
