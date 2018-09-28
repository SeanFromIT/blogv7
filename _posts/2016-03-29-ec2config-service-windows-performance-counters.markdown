---
author: SeanFromIT
comments: true
date: 2016-03-29 22:06:11+00:00
layout: post
link: https://feeney.mba/2016/03/29/ec2config-service-windows-performance-counters/
slug: ec2config-service-windows-performance-counters
title: EC2Config Service Windows Performance Counters
wordpress_id: 691
categories:
- amazon
- Microsoft
- monitoring
- sys admin
- Windows Server 2012
---

For those wishing to use native AWS services like CloudWatch for your Windows OS logging and/or monitoring, you have to explicitly define what you want to send to CloudWatch in "%programfiles%AmazonEc2ConfigServiceSettings
AWS.EC2.Windows.CloudWatch.json". Focusing on performance metrics, similar to what you'd get out of the box with most monitoring solutions, there is one example given:

```json
{
"Id": "PerformanceCounter",
"FullName": "AWS.EC2.Windows.CloudWatch.PerformanceCounterComponent.PerformanceCounterInputComponent,AWS.EC2.Windows.CloudWatch",
"Parameters": {
"CategoryName": "Memory",
"CounterName": "Available MBytes",
"InstanceName": "",
"MetricName": "Memory",
"Unit": "Megabytes",
"DimensionName": "",
"DimensionValue": ""
}
},
```

This monitors available RAM. Below are additional performance counter examples. Be sure to use a unique ID for each check you add, and add these IDs to the Flows section at the bottom of the json file. Save the config and restart the EC2Config Service to take effect.

**Logical CPU Usage**

You should use the built-in CloudWatch CPUUtilization metric for this.

**Amount Free Space C:**

```json
{
"Id": "PerformanceCounterDisk",
"FullName": "AWS.EC2.Windows.CloudWatch.PerformanceCounterComponent.PerformanceCounterInputComponent,AWS.EC2.Windows.CloudWatch",
"Parameters": {
"CategoryName": "LogicalDisk",
"CounterName": "Free Megabytes",
"InstanceName": "C:",
"MetricName": "FreeDisk",
"Unit": "Megabytes",
"DimensionName": "",
"DimensionValue": ""
}
},
```

**Paging File Usage:**

```json
{
"Id": "PerformanceCounterPaging",
"FullName": "AWS.EC2.Windows.CloudWatch.PerformanceCounterComponent.PerformanceCounterInputComponent,AWS.EC2.Windows.CloudWatch",
"Parameters": {
"CategoryName": "Paging File",
"CounterName": "Paging Usage",
"InstanceName": "_Total",
"MetricName": "Paging",
"Unit": "Percent",
"DimensionName": "",
"DimensionValue": ""
}
},
```

If you were using all of these, your Flows section might look like:

```
"Flows": {
"Flows":
[
"(ApplicationEventLog,SystemEventLog),CloudWatchLogs",
"(PerformanceCounter,PerformanceCounterCPU,PerformanceCounterDisk,PerformanceCounterPaging),CloudWatch"
]
}
```

See also:



	
  * [Sending Performance Counters to CloudWatch and Logs to CloudWatch Logs Using EC2Config](http://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/send_logs_to_cwl.html)

	
  * [Using CloudWatch Logs with Amazon EC2 Running Microsoft Windows Server](https://blogs.aws.amazon.com/application-management/post/Tx1KG4IKXZ94QFK/Using-CloudWatch-Logs-with-Amazon-EC2-Running-Microsoft-Windows-Server)


