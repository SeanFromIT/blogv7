---
author: SeanFromIT
comments: "true"
date: 2016-02-19 05:42:48+00:00
layout: post
link: https://feeney.mba/2016/02/19/php-websites-on-aws-elastic-beanstalk-with-free-ssl/
slug: php-websites-on-aws-elastic-beanstalk-with-free-ssl
title: PHP Websites on AWS Elastic Beanstalk with Free SSL
image: /assets/img/2016/02/blogCapture.PNG
wordpress_id: 544
categories:
- AWS
- sys admin
- Web Apps
- web development
- Website Security
---

_Prerequisites:_



 	
  * _[AWS CLI]({{ site.baseurl }}/aws-command-line-options-on-mac.html)_

 	
  * _A PHP Elastic Beanstalk app configured to use an ELB (even if it's a single-server instance)_


With the launch of the [AWS Certificate Manager](https://aws.amazon.com/blogs/aws/new-aws-certificate-manager-deploy-ssltls-based-apps-on-aws/) (ACM), AWS users now have access to free SSL certificates for use with AWS services. These certificates are not _yet_ directly integrated with Elastic Beanstalk, but you can still use them with it via your load balancer (ELB). Here's how.



1. Request and verify a certificate in Certificate Manager. Note the ARN by expanding the certificate details ([screenshot here](https://d262ilb51hltx0.cloudfront.net/max/1200/1*2aj2g5gproFDuMwSf4aQcA.png)).

2. [8/8/16: See below update before doing this step] Create a JSON file with the following, replacing {ARN} with your certificate's ARN:

    ```json
    [
    {
    "Namespace" : "aws:elb:healthcheck",
    "OptionName" : "Target",
    "Value" : "HTTP:80/status"
    },
    {
    "Namespace" : "aws:elb:listener:443",
    "OptionName" : "ListenerProtocol",
    "Value" : "HTTPS"
    },
    {
    "Namespace" : "aws:elb:listener:443",
    "OptionName" : "SSLCertificateId",
    "Value" : "{ARN}"
    },
    {
    "Namespace" : "aws:elb:listener:443",
    "OptionName" : "InstancePort",
    "Value" : "80"
    },
    {
    "Namespace" : "aws:elb:listener:443",
    "OptionName" : "InstanceProtocol",
    "Value" : "HTTP"
    },
    {
    "Namespace" : "aws:elb:listener:443",
    "OptionName" : "ListenerEnabled",
    "Value" : "true"
    },
    {
    "Namespace" : "aws:elb:listener:80",
    "OptionName" : "ListenerProtocol",
    "Value" : "HTTP"
    },
    {
    "Namespace" : "aws:elb:listener:80",
    "OptionName" : "InstancePort",
    "Value" : "80"
    },
    {
    "Namespace" : "aws:elb:listener:80",
    "OptionName" : "InstanceProtocol",
    "Value" : "HTTP"
    },
    {
    "Namespace" : "aws:elb:listener:80",
    "OptionName" : "ListenerEnabled",
    "Value" : "true"
    }
    ]
```


    _Note: This is newer syntax than the Management Console uses, so you will not_ at this time _be able to reconfigure your load balancer ports and protocols through the Console after this change. You'll have to use the CLI to make changes. Also, I use a very basic health check in this example which looks for a blank file called status in my app root. You may need something more complex in your environment. Finally, if you get any errors, chances are your namespaces aren't matching up with your existing environment. Run_ eb config _in the EB CLI to confirm._

    Why is this still using port 80 and HTTP? Because we're terminating the cert at the ELB and leaving traffic between the ELB and the instance(s), inside of AWS, unencrypted. If you need encryption all the way through, the free ACM certificates don't _yet_ fit your use case. Upload your own cert to IAM and your instance(s) and use that.

    **Update 8/8/16**: The Management Console has added an ACM option to the ELB config menu, so you now can do this step via GUI.
    ![Management Console Screenshot](/assets/img/2016/02/blogCapture.PNG)

3. Using the AWS CLI, run the following command, replacing {EBenv} with your Elastic Beanstalk app's Environment Name, and {PATHtoJSON} with the path to the JSON file you just created:


    `aws elasticbeanstalk update-environment --environment-name {EBenv} --option-settings file://{PATHtoJSON}`

At this point your environment will update and then your website will be accessible via HTTPS on port 443 and secured over the open Internet by the AWS cert. But wouldn't it be better to force users to use HTTPS? Let's use Elastic Beanstalk hooks to do that. (Note: You cannot just shut down port 80 as the Elastic Beanstalk Host Manager and your ELB use it.)

1. In your code's root directory, add a folder named **.ebextensions** and create a blank file named **status**. If your app is not a PHP app, the location where you place this folder may need to change.

2. Create an apache config (.conf) file in this new folder with the following contents (change /status to match your ELB health check if different):

    ```
    RewriteEngine On
    RewriteCond %{HTTP:X-Forwarded-Proto} !https
    RewriteRule !/status https://%{SERVER_NAME}%{REQUEST_URI} [R,L]
    
    LogFormat "%h (%{X-Forwarded-For}i) %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\""
    ErrorLog /var/log/httpd/elasticbeanstalk-error_log
    TransferLog /var/log/httpd/elasticbeanstalk-access_log
    ```

3. Create another file in the folder, this time a .config, replacing {APACHEconfig} with the filename from the last step:

    ```
    container_commands:
    01_replace_apache_server:
    command: cp .ebextensions/{APACHEconfig} /etc/httpd/conf.d/elasticbeanstalk.conf
    02_restart_apache:
    command: /usr/sbin/apachectl restart
    ```

_(Note: Beware spacing in this file. No tabs are allowed.)_


Now Upload and Deploy your app with this new version. And voila, you're now serving only HTTPS connections to users of your Elastic Beanstalk website.

Isn't there a better way? **Yes, ACM natively supports CloudFront, and it's best practice that you use it**. CloudFront has a setting called "Viewer Protocol Policy" with option "Redirect HTTP to HTTPS." More info [here](http://docs.aws.amazon.com/acm/latest/userguide/gs-cf.html) and [here](http://serverfault.com/a/643404/73012).

With thanks to:
[Matt Snider](http://msnider.github.io/blog/2013/12/06/force-https-slash-ssl-on-amazon-elastic-beanstalk/)
[Anand Capur](https://medium.com/@arcdigital/enabling-ssl-via-aws-certificate-manager-on-elastic-beanstalk-b953571ef4f8#.2c0qf2wm2)
