---
author: SeanFromIT
comments: true
date: 2016-04-25 20:11:09+00:00
layout: post
link: https://feeney.mba/2016/04/25/deploying-ssl-multisite-wordpress-with-aws-elastic-beanstalk/
slug: deploying-ssl-multisite-wordpress-with-aws-elastic-beanstalk
title: Deploying SSL Multisite WordPress with AWS Elastic Beanstalk
wordpress_id: 768
categories:
- amazon
- blogging
- cloud computing
- hosting
- tutorials
- web development
- Website Security
---

See: [Deploying WordPress with AWS Elastic Beanstalk](https://d0.awsstatic.com/whitepapers/deploying-wordpress-with-aws-elastic-beanstalk.pdf)

Notes:

**#10**: WordPress offers their [secret-key service](https://api.wordpress.org/secret-key/1.1/salt/) to generate the keys and salts but it uses special characters that are not $_SERVER[] friendly. Avoid characters like ; | ` and space.

In wp-config.php, add


<blockquote>define('WP_ALLOW_MULTISITE', true);</blockquote>


after


<blockquote>define('WP_DEBUG', false);</blockquote>


to enable multisite.

**#26**: Here is where you should stop and configure your multisite Network. Doing so will generate some code you need to add to wp-config.php and .htaccess. I selected subdomains so I can easily route using Route 53. The wp-config will be specific, but it looks like htaccess is not so here it is:


```
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes).*) $1 [L]
RewriteRule ^(.*.php)$ $1 [L]
RewriteRule . index.php [L]
</IfModule>
```

If you want to use multiple top-level domains, you'll also want to add the following line to wp-config.php before the last _require_once_ command:


<blockquote>define('COOKIE_DOMAIN', $_SERVER[ 'HTTP_HOST' ]);</blockquote>


And if you plan on using Jetpack:


<blockquote>define('JETPACK_SIGNATURE__HTTPS_PORT', 80);</blockquote>


Now zip up your full codebase and re-upload to Elastic Beanstalk (EB).
