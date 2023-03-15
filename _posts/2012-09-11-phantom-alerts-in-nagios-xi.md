---
author: SeanFromIT
comments: "true"
date: 2012-09-11 18:54:00+00:00
layout: post
link: https://feeney.mba/2012/09/11/phantom-alerts-in-nagios-xi/
slug: phantom-alerts-in-nagios-xi
title: Phantom Alerts in Nagios XI
wordpress_id: 82
categories:
- nagios
---

Have you noticed that as the host contact for a given server, you receive all service alerts for that server, even if you delete yourself from the contacts section of the service config?  
  
If you’re ever having problems with notifications for a service still coming even after you deleted the contact(s) in Nagios XI, you may be suffering from implied inheritance. This can happen to the following objects:  
  
<table border="1" ><tbody ><tr >Object TypeObject VariableImplied Source</tr><tr >
<td rowspan="3" >**Services**
</td>
<td >_contact_groups_
</td>
<td >_contact_groups_ in the associated host definition
</td> </tr><tr >
<td >_notification_interval_
</td>
<td >_notification_interval_ in the associated host definition
</td> </tr><tr >
<td >_notification_period_
</td>
<td >_notification_period_ in the associated host definition
</td> </tr><tr >
<td rowspan="3" >**Host Escalations**
</td>
<td >_contact_groups_
</td>
<td >_contact_groups_ in the associated host definition
</td> </tr><tr >
<td >_notification_interval_
</td>
<td >_notification_interval_ in the associated host definition
</td> </tr><tr >
<td >_escalation_period_
</td>
<td >_notification_period_ in the associated host definition
</td> </tr><tr >
<td rowspan="3" >**Service Escalations**
</td>
<td >_contact_groups_
</td>
<td >_contact_groups_ in the associated service definition
</td> </tr><tr >
<td >_notification_interval_
</td>
<td >_notification_interval_ in the associated service definition
</td> </tr><tr >
<td >_escalation_period_
</td>
<td >_notification_period_ in the associated service definition
</td> </tr></tbody></table>  
The fix is to select **null** under the contact or contact group selection box when you don’t select anything in it and absolutely don’t want inheritance to happen.
