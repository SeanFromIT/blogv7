---
author: SeanFromIT
comments: "true"
date: 2011-05-23 22:39:00+00:00
layout: post
link: https://feeney.mba/2011/05/23/tsm-vcb-proxy-setup/
slug: tsm-vcb-proxy-setup
title: TSM VCB Proxy Setup
wordpress_id: 107
categories:
- IBM
- TSM
- VMware
- Windows
---

**Planning**  
  
There are different ways to backup your data - over the network, direct from SAN, or "hot add." Your proxy server can itself be a virtual machine if you choose over the network or hot add modes. Hot add is supposed to be very efficient, as it gives a direct access path to the other VM's disks, similar to SAN-based backup, but I just didn't trust mounting production drives across multiple VMs. So I chose over the network for this walk through. As long as your proxy VM and the VM it's backing up are on the same physical hosts, the physical network won't actually be involved. It's actually recommended practice that you only have one ESX host per virtual proxy.  
  
**Setup**  
  
You need a service account, preferably in an active directory domain, to run the backup process as. This service account's password can have NO SPECIAL CHARACTERS as of TSM 6.2.2. While vcbMounter can handle a password with special characters, TSM cannot. A bug report has been filed. This service account needs to be setup in your vCenter with the following permissions:  


1. Log on to the VI Client as a user with Administrator privileges.
2. From the VI Client, click Administration in the navigation bar.
3. Click the Roles tab.
4. Click Add Role. The Add Role dialog box appears.
5. Type a name for the new role, for example, VMware Consolidated Backup User. THE EXISTING SAMPLE ROLE IS NOT GOOD ENOUGH.
6. Select the following privileges for the new role. Click the plus (+) signs to expand the lists, as needed.
    1. Global > Cancel Task
    2. VirtualMachine > Inventory > Create
    3. VirtualMachine > Inventory > Remove
    4. VirtualMachine > Interaction > Power On
    5. VirtualMachine > Configuration > Disk Lease
    6. VirtualMachine > State > Create Snapshot
    7. VirtualMachine > State > Remove Snapshot
    8. VirtualMachine > Provisioning > Allow Virtual Machine Download
    9. VirtualMachine > Provisioning > Allow Read‐only Disk Access
    10. VirtualMachine > Provisioning > Customize
    11. VirtualMachine > Provisioning > Allow Disk Access
    12. VirtualMachine > Provisioning > Allow Virtual Machine Files Upload
    13. Resource > Assign Virtual Machine to Resource Pool
7. Click OK to complete the process.

Back in Inventory-Hosts and Clusters, click the top level name of your vCenter server and go to the Permissions tab. Right click in any white space and select Add Permission. Under Assigned Role, select the new role you just created. Under Users and Groups click Add. Select the Domain where your service account resides. In users field, type DomainServiceAccountUsername. OK, propagate to child objects is fine, OK.  
  
Note: If this is the same account you logged into vCenter as, you'll lose your administrative privileges. Any other member of the vCenter's Windows Administrators Group will be able to get you back in.  
  
Now that permissions are sorted out, let's build your proxy server. You need a staging partition whose size is equivalent to the sum of the sizes of all of the VMDK's of your single largest VM. I actually built in additional space to provide for growth. During the backup process, the VM being backed up will be copied to this partition before being sent off to TSM. It's a sequential process, which is why this partition only needs to be as large as the largest VM you plan on backing up.  
  
After installing Windows and configuring to your liking (disabling IPv6 is a good idea to help with address translation issues), you'll need to install the [VCB Framework](http://www.vmware.com/download/download.do?downloadGroup=VCB15U2) from VMware. Now let's configure it by editing C:\Program Files (x86)\VMware\VMware Consolidated Backup Framework\configconfig.js:  

```
BACKUPROOT="E:"  --The staging partition  
HOST="vCenter.somedomain.com" --FQDN of your vCenter Server  
USERNAME="__sspi__"  --Use the currently logged in user  
PASSWORD=""  --Password is passed from TSM  
TRANSPORT_MODE=nbd  --Network-based backup  
```

When installing TSM Client 6.2.2, choose Custom and select the VMware option. After the install is complete, open the GUI and go to Edit-Client Preferences and click onto the VM Backup tab.  
  
  * Backup Type > VMware Full VM (or whatever you want)
  * Domain for VM Backup > Domain Backup Types > Domain Full VM
  * Domain for VM Backup > VM Options > ALL-VM
  * Domain for VM Backup > VM host, VM folder or VM name > ALL-VM
  * Press Insert
  * VMware Virtual Center or ESX Server > Host: FQDN of your vCenter Server
  * VMware Virtual Center or ESX Server > User: Your Service Account
  * Datastore Location: The staging partition
  * Apply, Ok, Ok

You should narrow the Domain in a large environment as discussed in the Planning section. Now modify dsm.opt to suit your environment. If you choose to do a file level backup of your VCB Proxy, be sure to exclude the staging drive. Now set the password for your service account within TSM:

`c:\program files\tivoli\tsmbaclient\dsmc SET PASSWORD -type=VCB "vCenter.somedomain.com" "DomainServiceAccountUsername" "password"`

Explicitly give the service account full control of C:\Program Files\Tivoli\TSMbaclient and C:\Program Files (x86)\VMware.  
  
**Testing**  
  
You can test the ALL-VM domain or just one VM at a time (by specifying optional _vmname_) with the following command:  


`c:\program files\tivoli\tsmbaclient\dsmc backup vm _vmname_ -vmbackuptype=FULL`

**Scheduling**  
  
Once testing has completed, you can schedule the backup by running your standard scheduler service on the VCB Proxy and creating a special schedule on your TSM server that kicks off the following client command:  


`'"C:\Progra~1\Tivoli\TSMbaclient\dsmc backup vm -vmbackuptype=FULL"'`

The quotes must be exactly as so.  
  
**Troubleshooting**  
  
If you get IP address lookup failures, check what hostname it's trying to hit. Ensure proper DNS translation is occurring on the VCB Proxy server for that hostname. You can use the Windows hosts file as needed.  
  
To snapshot 2008 & 2008 R2 VMs, you may need to set the following flag while the VM is offline:  
Edit Settings-Options-Advanced-General-Configuration Parameters  
Add Row:  
`disk.EnableUUID = FALSE`
  
To troubleshoot the scheduled command, change the schedule to STARTTIME=NOW on the TSM server and then run it in the foreground by executing the following on the VCB Proxy:  


`dsmc sched -optfile="C:\Program Files\Tivoli\pathtodsm.opt"`

  

