## Overview
We started using :rocket: as an internal communication tool @[cloudfactory](https://github.com/cloudfactory) and immediately felt the lack of integrations we are used to. rocketchat_pagerduty_incoming.js is a script that will parse webhook notifications coming to Rocket.Chat from PagerDuty. If you don't know [pagerduty](https://pagerduty.com), you should definitely check them out. Please consult [Rocket.Chat Docs](https://rocket.chat/docs/administrator-guides/integrations/) for more holistic integration documentation.

## Installation

### Rocket.Chat

1. Login as admin user and go to:<br>
_Administration => Integrations => New Integration => Incoming WebHook_

2.  Set "Enabled" and "Script Enabled" to "True"

3.  Set all channel, icons, etc. as you need/preference !!

4.  Paste contents of [rocketchat_pagerduty_incoming.js](https://github.com/kajisaap/rocketchat-pagerduty/blob/master/rocketchat_pagerduty_incoming.js) into the _Script_ field.

5.  Copy WebHook URL as soon as you saved the integration and proceed to the configuration of generic webhook integration in PagerDuty.

### PagerDuty

1. Go to the Configuration menu and select Services, then click the name of the service you want to add a webhook to.

2. By default, you will be directed to Incidents tab for the service.

3. Click Add an extension.

4. For the Extension Type select Generic Webhook.

5. Enter a unique Extension Name eg. rocketchat

More details:<br>
[PagerDuty WebHook Docs](https://support.pagerduty.com/hc/en-us/articles/202830320-Webhooks)

### Things in Action
**Alert Triggered in PagerDuty**
<img src=https://raw.githubusercontent.com/kajisaap/rocketchat-pagerduty/master/screenshots/alert_triggered.png>

**Alert Acknowledged in PagerDuty**
<img src=https://raw.githubusercontent.com/kajisaap/rocketchat-pagerduty/master/screenshots/alert_ack.png>

**Alert Resolved in PagerDuty**
<img src=https://raw.githubusercontent.com/kajisaap/rocketchat-pagerduty/master/screenshots/alert_resolved.png>
