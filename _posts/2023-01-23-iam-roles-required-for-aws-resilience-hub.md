---
author: SeanFromIT
comments: 'true'
layout: post
date: 2023-01-23T18:07:00.000-07:00
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

The scenario: Multi-account architecture with IAM Identity Center (SSO). The users of a specific SSO permissions set will log in and point Resilience Hub at Terraform state files. The state files are generally centrally stored in S3, but the Terraform might deploy infra into any account within the AWS Organization. Also, there are a few accounts they might try and run this from.

If you use permissions boundaries to limit the reach of permissions sets, you need to either exclude these Resilience Hub roles from the boundary enforcement or add the boundary to them.

In the SSO permission set(s), allow the users to assume the `AwsResilienceHubAdminAccountRole` in each account they might run Resilience Hub from:

    {
        "Effect": "Allow",
        "Action": [
          "iam:GetRole",
          "iam:PassRole",
          "sts:AssumeRole"
        ],
        "Resource": [
          "arn:aws:iam::<account1ID>:role/AwsResilienceHubAdminAccountRole",
          "arn:aws:iam::<account2ID>:role/AwsResilienceHubAdminAccountRole",
          "arn:aws:iam::<account3ID>:role/AwsResilienceHubAdminAccountRole"
        ]
      }

Create the `AwsResilienceHubAdminAccountRole`, `AwsResilienceHubExecutorAccountRole`, and `AwsResilienceHubPeriodicAssessmentRole` IAM roles in the target accounts. The Admin role is required in the account Resilience Hub is run from, and the Executor and Periodic roles are required in each account the Terraform state file(s) build(s) in. It doesn't hurt if they all exist in every account. The variable is the account ID number you're deploying the roles into.

    variable "aws_account_id" {
      type = string
    }
    
    terraform {
      required_providers {
        aws = {
          source = "hashicorp/aws"
        }
      }
    }
    
    data "aws_iam_roles" "ssoRole" {
      name_regex = "AWSReservedSSO_<SSOPermissionSetName>_.*"
    }
    
    resource "aws_iam_role" "AwsResilienceHubAdminAccountRole" {
      name = "AwsResilienceHubAdminAccountRole"
    
      assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
          {
            Action = "sts:AssumeRole"
            Effect = "Allow"
            Principal = {
              AWS = "arn:aws:iam::${var.aws_account_id}:root"
            }
          },
          {
            Action = "sts:AssumeRole"
            Effect = "Allow"
            Principal = {
              AWS = data.aws_iam_roles.ssoRole.arns
            }
          },
        ]
      })
    
      inline_policy {
        name = "AwsResilienceHubAdminAccountRole_policy"
        
        policy = jsonencode({
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "sts:AssumeRole"
                    ],
                    # Wildcards aren't the best, hardcode all your account numbers to increase security
                    "Resource": "arn:aws:iam::*:role/AwsResilienceHubExecutorAccountRole"
                },
            ]
        })
      }
    }
    
    resource "aws_iam_role" "AwsResilienceHubExecutorAccountRole" {
      name = "AwsResilienceHubExecutorAccountRole"
    
      assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
          {
            Action = "sts:AssumeRole"
            Effect = "Allow"
            Principal = {
              AWS = [
                # IAM appears to validate these, so they must exist first
                "arn:aws:iam::<account1ID>:role/AwsResilienceHubAdminAccountRole",
                "arn:aws:iam::<account2ID>:role/AwsResilienceHubAdminAccountRole",
                "arn:aws:iam::<account3ID>:role/AwsResilienceHubAdminAccountRole"
              ]
            }
          },
        ]
      })
    
      depends_on = [aws_iam_role.AwsResilienceHubAdminAccountRole]
    
      inline_policy {
        name = "AwsResilienceHubExecutorAccountRole_policy"
        
        policy = jsonencode({
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "resiliencehub:*"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "ssm:DescribeAutomationExecutions"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "sns:GetTopicAttributes",
                        "sns:ListSubscriptionsByTopic",
                        "sns:GetSubscriptionAttributes"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "cloudformation:DescribeStacks",
                        "cloudformation:ListStackResources",
                        "cloudformation:ValidateTemplate"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "servicecatalog:GetApplication",
                        "servicecatalog:ListAssociatedResources"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "resource-groups:ListGroupResources",
                        "resource-groups:GetGroup",
                        "tag:GetResources"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "cloudwatch:DescribeAlarms",
                        "cloudwatch:GetMetricData",
                        "cloudwatch:GetMetricStatistics",
                        "cloudwatch:PutMetricData"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "fis:GetExperimentTemplate",
                        "fis:ListExperimentTemplates",
                        "fis:ListExperiments"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "ssm:GetParametersByPath"
                    ],
                    "Resource": "arn:aws:ssm:*:*:parameter/ResilienceHub/*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "s3:GetBucketPolicyStatus",
                        "s3:PutBucketVersioning",
                        "s3:GetBucketTagging",
                        "s3:GetBucketVersioning",
                        "s3:GetReplicationConfiguration",
                        "s3:ListBucket",
                        "s3:ListAllMyBuckets",
                        "s3:GetBucketLocation"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "s3:CreateBucket",
                        "s3:PutObject",
                        "s3:GetObject"
                    ],
                    "Resource": "arn:aws:s3:::aws-resilience-hub-artifacts-*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "autoscaling:DescribeAutoScalingGroups"
                    ],
                    "Resource": "*"
                },  
                {
                    "Effect": "Allow",
                    "Action": [
                        "ec2:DescribeAvailabilityZones",
                        "ec2:DescribeVpcEndpoints",
                        "ec2:DescribeFastSnapshotRestores",
                        "ec2:DescribeInstances",
                        "ec2:DescribeSnapshots",
                        "ec2:DescribeVolumes",
                        "ec2:DescribeNatGateways",
                        "ec2:DescribeSubnets",
                        "ec2:DescribeRegions",
                        "ec2:DescribeTags"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "rds:DescribeDBClusters",
                        "rds:DescribeDBInstanceAutomatedBackups",
                        "rds:DescribeDBInstances",
                        "rds:DescribeGlobalClusters",
                        "rds:DescribeDBClusterSnapshots"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "elasticloadbalancing:DescribeTargetGroups",
                        "elasticloadbalancing:DescribeLoadBalancers",
                        "elasticloadbalancing:DescribeTargetHealth"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "lambda:GetFunction",
                        "lambda:GetFunctionConcurrency",
                        "lambda:ListAliases",
                        "lambda:ListVersionsByFunction"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "ecr:DescribeRegistry"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "backup:DescribeBackupVault",
                        "backup:GetBackupPlan",
                        "backup:GetBackupSelection",
                        "backup:ListBackupPlans",
                        "backup:ListBackupSelections"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "dynamodb:ListTagsOfResource",
                        "dynamodb:DescribeTable",
                        "dynamodb:DescribeGlobalTable",
                        "dynamodb:ListGlobalTables",
                        "dynamodb:DescribeContinuousBackups",
                        "dynamodb:DescribeLimits"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "elasticfilesystem:DescribeMountTargets",
                        "elasticfilesystem:DescribeFileSystems"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "sqs:GetQueueUrl",
                        "sqs:GetQueueAttributes"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "apigateway:GET"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "ecs:DescribeClusters",
                        "ecs:ListServices",
                        "ecs:DescribeServices",
                        "ecs:DescribeCapacityProviders",
                        "ecs:DescribeContainerInstances",
                        "ecs:ListContainerInstances",
                        "ecs:DescribeTaskDefinition"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "route53-recovery-control-config:ListControlPanels",
                        "route53-recovery-control-config:ListRoutingControls",
                        "route53-recovery-readiness:ListReadinessChecks",
                        "route53-recovery-readiness:GetResourceSet",
                        "route53-recovery-readiness:GetReadinessCheckStatus",
                        "route53-recovery-control-config:ListClusters",
                        "route53:ListHealthChecks",
                        "route53:ListHostedZones",
                        "route53:ListResourceRecordSets",
                        "route53:GetHealthCheck"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "drs:DescribeSourceServers",
                        "drs:DescribeJobs",
                        "drs:GetReplicationConfiguration"
                    ],
                    "Resource": "*"
                }
            ]
        })
      }
    }
    
    resource "aws_iam_role" "AwsResilienceHubPeriodicAssessmentRole" {
      name = "AwsResilienceHubPeriodicAssessmentRole"
    
      assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
          {
            Action = "sts:AssumeRole"
            Effect = "Allow"
            Principal = {
              Service = "resiliencehub.amazonaws.com"
            }
          },
        ]
      })
    
      inline_policy {
        name = "AwsResilienceHubPeriodicAssessmentRole_policy"
        
        policy = jsonencode({
            "Version": "2012-10-17",
            "Statement": [
    # TODO - PeriodicAssessment hasn't been fully tested yet
    # This first block might not be needed, 
    # or might need to be hard coded to the acct # where Resil Hub is run from
            {
                    "Effect": "Allow",
                    "Action": [
                        "iam:GetRole",
                        "iam:PassRole",
                        "sts:AssumeRole"
                    ],
                    "Resource": "arn:aws:iam::${var.aws_account_id}:role/AwsResilienceHubAdminAccountRole"
            },
                {
                    "Effect": "Allow",
                    "Action": [
                        "resiliencehub:*"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "sns:GetTopicAttributes",
                        "sns:ListSubscriptionsByTopic",
                        "sns:GetSubscriptionAttributes"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "cloudformation:DescribeStacks",
                        "cloudformation:ListStackResources",
                        "cloudformation:ValidateTemplate"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "servicecatalog:GetApplication",
                        "servicecatalog:ListAssociatedResources"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "resource-groups:ListGroupResources",
                        "resource-groups:GetGroup",
                        "tag:GetResources"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "cloudwatch:DescribeAlarms",
                        "cloudwatch:GetMetricData",
                        "cloudwatch:GetMetricStatistics",
                        "cloudwatch:PutMetricData"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "fis:GetExperimentTemplate",
                        "fis:ListExperimentTemplates",
                        "fis:ListExperiments"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "ssm:GetParametersByPath"
                    ],
                    "Resource": "arn:aws:ssm:*:*:parameter/ResilienceHub/*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "s3:GetBucketPolicyStatus",
                        "s3:PutBucketVersioning",
                        "s3:GetBucketTagging",
                        "s3:GetBucketVersioning",
                        "s3:GetReplicationConfiguration",
                        "s3:ListBucket",
                        "s3:ListAllMyBuckets",
                        "s3:GetBucketLocation"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "s3:CreateBucket",
                        "s3:PutObject",
                        "s3:GetObject"
                    ],
                    "Resource": "arn:aws:s3:::aws-resilience-hub-artifacts-*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "autoscaling:DescribeAutoScalingGroups"
                    ],
                    "Resource": "*"
                },  
                {
                    "Effect": "Allow",
                    "Action": [
                        "ec2:DescribeAvailabilityZones",
                        "ec2:DescribeVpcEndpoints",
                        "ec2:DescribeFastSnapshotRestores",
                        "ec2:DescribeInstances",
                        "ec2:DescribeSnapshots",
                        "ec2:DescribeVolumes",
                        "ec2:DescribeNatGateways",
                        "ec2:DescribeSubnets",
                        "ec2:DescribeRegions",
                        "ec2:DescribeTags"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "rds:DescribeDBClusters",
                        "rds:DescribeDBInstanceAutomatedBackups",
                        "rds:DescribeDBInstances",
                        "rds:DescribeGlobalClusters",
                        "rds:DescribeDBClusterSnapshots"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "elasticloadbalancing:DescribeTargetGroups",
                        "elasticloadbalancing:DescribeLoadBalancers",
                        "elasticloadbalancing:DescribeTargetHealth"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "lambda:GetFunction",
                        "lambda:GetFunctionConcurrency",
                        "lambda:ListAliases",
                        "lambda:ListVersionsByFunction"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "ecr:DescribeRegistry"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "backup:DescribeBackupVault",
                        "backup:GetBackupPlan",
                        "backup:GetBackupSelection",
                        "backup:ListBackupPlans",
                        "backup:ListBackupSelections"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "dynamodb:ListTagsOfResource",
                        "dynamodb:DescribeTable",
                        "dynamodb:DescribeGlobalTable",
                        "dynamodb:ListGlobalTables",
                        "dynamodb:DescribeContinuousBackups",
                        "dynamodb:DescribeLimits"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "elasticfilesystem:DescribeMountTargets",
                        "elasticfilesystem:DescribeFileSystems"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "sqs:GetQueueUrl",
                        "sqs:GetQueueAttributes"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "apigateway:GET"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "ecs:DescribeClusters",
                        "ecs:ListServices",
                        "ecs:DescribeServices",
                        "ecs:DescribeCapacityProviders",
                        "ecs:DescribeContainerInstances",
                        "ecs:ListContainerInstances",
                        "ecs:DescribeTaskDefinition"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "route53-recovery-control-config:ListControlPanels",
                        "route53-recovery-control-config:ListRoutingControls",
                        "route53-recovery-readiness:ListReadinessChecks",
                        "route53-recovery-readiness:GetResourceSet",
                        "route53-recovery-readiness:GetReadinessCheckStatus",
                        "route53-recovery-control-config:ListClusters",
                        "route53:ListHealthChecks",
                        "route53:ListHostedZones",
                        "route53:ListResourceRecordSets",
                        "route53:GetHealthCheck"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "drs:DescribeSourceServers",
                        "drs:DescribeJobs",
                        "drs:GetReplicationConfiguration"
                    ],
                    "Resource": "*"
                }
            ]
        })
      }
    }

Replace `<SSOPermissionSetName>`, `<account#ID>`, and wildcards as needed.

Note 1: Beware of explicit denies in your S3 bucket policies such as `"Condition": {"ArnNotLike": {"aws:PrincipalARN"}}`. The user running Resilience Hub must have permission to the bucket and TF state object (not just these service roles). Legacy Object Ownership ACLs can also interfere with the read of the state object. If you use SSE-KMS, you must also grant the Executor role access to the key(s) via kms: actions.

~~Note 2: Despite what you may have heard or read, you cannot use this service cross-account (at least with TF, not sure about other sources). That is a roadmap feature. For now, you must run Resiliency Hub in the same account where the state file is hosted in S3.~~ (Resolved April 2023)

Note 3: If the Terraform state file references objects in another account, Resiliency Hub's roles must also have basic permissions (e.g. read/list/describe) to those cross-account objects in order to evaluate their configuration. So the Executor role must exist in the other account with those basic permissions, and the Admin role must exist in the account where the Resilience Hub App is defined, and the Executor role needs to Trust the calling account's Admin role. This is another area where resource-level access policies can trip you up (looking at you, S3 bucket policies).
