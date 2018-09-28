---
author: SeanFromIT
comments: true
date: 2008-08-01 18:50:00+00:00
layout: post
link: https://feeney.mba/2008/08/01/connecting-to-exchange-without-vpn/
slug: connecting-to-exchange-without-vpn
title: Connecting to Exchange Without VPN
wordpress_id: 193
categories:
- exchange
- iait
- Microsoft
- rose-hulman
- vpn
---

These instructions are for Rose-Hulman Institute of Technology, but might be applicable elsewhere.  
  


[![]({{ site.baseurl }}/assets/img/2008/08/Outlook-300x266.jpg)]({{ site.baseurl }}/assets/img/2008/08/Outlook.jpg)

  1. Install the Rose-Hulman root certificate (.cer):
    1. Double click the .cer file  
Choose 'Install certificate' which will start the certificate import wizard.  
On the 'Certificate Store page,' do not choose the default 'Automatically select the certificate store,' instead choose 'Place all certificates in the following store.' Hit 'Browse' and then select 'Trusted Root Certification Authorities.'  
Then 'OK,' 'Next,' 'Finish,' and 'Yes.'
  2. Open      Outlook
  3. Click      Tools->Account Settings
  4. Select      the account with type "Exchange" and click Change
  5. Click      More Settings
  6. Select      the Connection tab
  7. Check      the box to "Connect to Microsoft Exchange using HTTP"
  8. Click      Exchange Proxy Settings
  9. Configure      the Exchange Proxy Settings to match the picture above.
  10. Click      OK/Next to close all dialog boxes
  11. Restart Outlook and login with username@rose-hulman.edu and password combination.
