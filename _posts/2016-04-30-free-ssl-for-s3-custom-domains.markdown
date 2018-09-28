---
author: SeanFromIT
comments: true
date: 2016-04-30 09:08:54+00:00
layout: post
link: https://feeney.mba/2016/04/30/free-ssl-for-s3-custom-domains/
slug: free-ssl-for-s3-custom-domains
title: Free SSL for S3 Custom Domains
wordpress_id: 792
---

I've posted [before]({{ site.baseurl }}/php-websites-on-aws-elastic-beanstalk-with-free-ssl.html) about AWS Certificate Manager (ACM), AWS' new free SSL certificates service. These certificates are not yet directly integrated with S3, but you can still use them with it via CloudFront.

After enabling your S3 bucket for static website hosting, and after creating and verifying your ACM cert, create a CloudFront distribution that points to the bucket and choose your ACM cert. Be sure to fill in the Alternate Domain Name(s) or you'll get a ssl_error_no_cypher_overlap/ERR_SSL_VERSION_OR_CIPHER_MISMATCH error. Finally, configure the Route 53 for your custom domain to alias the CloudFront domain name. Done.
