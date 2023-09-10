---
author: SeanFromIT
comments: "true"
date: 2016-10-05 21:05:40+00:00
layout: post
link: https://feeney.mba/2016/10/05/ec2-instance-migration-aws-to-aws/
slug: ec2-instance-migration-aws-to-aws
title: EC2 Instance Migration (AWS to AWS)
wordpress_id: 822
categories:
- AWS
- cloud
- migrations
- sys admin
---

Method 1: Detach EBS Volumes and Attach Directly
This method only works within the same AZ. It only works with EBS. These steps are for the Management Console, but you could use the CLI with the [run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html), [stop-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/stop-instances.html), [detach-volume](http://docs.aws.amazon.com/cli/latest/reference/ec2/detach-volume.html), [attach-volume](http://docs.aws.amazon.com/cli/latest/reference/ec2/attach-volume.html), and [start-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/start-instances.html) commands.

1. Shut down the source instance

2. Detach all volumes from the source instance, making a note of their Device names (mount points) on the source

3. From the EC2 page, select Launch Instance

4. Step 1: Select the same AMI that the source was launched from

5. Step 2: Select a matching instance type

6. Step 3: Select the target subnet

7. At this point you can continue to configure (storage, tags, SGs) or you can Review and Launch

8. You’ll be taken to the EC2-Instances page. Once the target instance is ready, select it and go to Actions-Instance State-Stop

9. Identify the root volume and detach it from the instance

10. Attach all source volumes to the target instance, matching their Device names like they were on the source

11. Start the target instance again

12. When you are sure that you’re done with the source instance, you can terminate it and delete the new root volume that was discarded


Method 2: Create an AMI
The steps listed here work only within the same region and account (with additional steps, this method could go across [accounts](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-explicit.html) and [regions](https://aws.amazon.com/about-aws/whats-new/2013/03/12/announcing-ami-copy-for-amazon-ec2/)). They work for EBS or local (Instance Store) storage. They are for the Management Console, but you could also use the CLI with the [create-image](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-image.html), [register-image](http://docs.aws.amazon.com/cli/latest/reference/ec2/register-image.html) and [run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) commands.

1. From the EC2-Instances page, select the source instance and go to Actions-Image-Create Image

    1. Image Name is required and limited to 127 characters

    2. Note: If you do not shut down the instance, data consistency is not guaranteed

2. From the EC2 page, select Launch Instance

3. Step 1: On the left hand menu, select My AMIs and Select the image you just created

4. Step 2: Select a matching instance type

5. Step 3: Select the target subnet

6. At this point you can continue to configure (storage, tags, SGs) or you can Review and Launch

7. When you are sure that you’re done with the source, you can terminate the source instance, delete its volumes, delete any snapshots of those volumes, and [deregister the AMI](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html#clean-up-ebs-ami) you created from it


Method 3: Snapshot the EBS volume(s)
This method works cross-region and cross-account. It only works with EBS. These steps are for the Management Console, but you could use the CLI with the [create-snapshot](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-snapshot.html), [copy-snapshot](http://docs.aws.amazon.com/cli/latest/reference/ec2/copy-snapshot.html), [modify-snapshot-attribute](http://docs.aws.amazon.com/cli/latest/reference/ec2/modify-snapshot-attribute.html), [create-volume](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-volume.html), [run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html), [stop-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/stop-instances.html), [detach-volume](http://docs.aws.amazon.com/cli/latest/reference/ec2/detach-volume.html), [attach-volume](http://docs.aws.amazon.com/cli/latest/reference/ec2/attach-volume.html), and [start-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/start-instances.html) commands.

Note: If you want to snapshot the root or C:\ volume, you should shut down the instance first.

1. Make a note of all EBS volume IDs attached to the instance

2. From the EC2-Snapshots page, click Create Snapshot

3. Insert the volume ID, optionally a name and description, and click Create

4. Repeat for all volumes and wait for the snapshots to finish (status = completed)

5. (If moving to another region) Select the snapshot and go to Actions-Copy. Here you can select the region give a description. Repeat for all involved snapshots

    * Note: The first snapshot copy to another region is always a full copy. Each subsequent snapshot copy is incremental

6. (If moving to another account) Select the snapshot and go to Actions-Modify Permissions. Here you can insert the account number and set the account’s permissions. Repeat for all involved snapshots

    * Important: Do not select Public or you could expose your data to the outside world

7. Now, using the target account, recreate the root volume from the appropriate snapshot in the target region. Select the snapshot and go to Actions-Create Volume. The options will pre-fill to match the source volume. You can **expand the volume** here if you wish.

8. Note the snapshot IDs of any non-root volumes

9. From the EC2 page, select Launch Instance

10. Step 1: Select the same AMI that the source was launched from

11. Step 2: Select a matching instance type

12. Step 3: Select the target subnet

13. Step 4: For any non-root volumes, click Add New Volume and insert their snapshot ID and match their Device names (mount points) like they were on the source. This will recreate the non-root volumes as part of the launch

14. At this point you can continue to configure (tags, SGs) or you can Review and Launch

15. You’ll be taken to the EC2-Instances page. Once the target instance is ready, select it and go to Actions-Instance State-Stop

16. Identify the root volume and detach it from the instance

17. Attach the root volume created from the snapshot during step #7

    * Enter /dev/sda1 for the Device (even for Windows)

18. Start the target instance again

19. When you are sure that you’re done with the source, you can terminate the source instance, delete its volumes, delete the snapshots of those volumes, and delete the new root volume that was discarded
