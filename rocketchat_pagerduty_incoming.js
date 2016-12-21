class Script {
  process_incoming_request({ request }) {
    // console is a global helper to improve debug
    console.log(request.content);

    var alertColor = "warning";
		var condition = request.content.messages[0].data.incident;
		var pdReceiver = ":rocket:"


    if(request.content.messages[0].data.incident.status === "triggered"){ alertColor = "danger"; pdReceiver = condition.assigned_to_user.name; }
    else if (request.content.messages[0].data.incident.status === "resolved") { alertColor = "good"; pdReceiver = condition.resolved_by_user.name; }
    else  { pdReceiver = condition.assigned_to_user.name; }

    return {
      content:{
        attachments: [{
          title: condition.service.name,
          pretext: condition.trigger_summary_data.subject,
          title_link: condition.html_url,
          text: condition.trigger_summary_data.subject,
          color: alertColor,
          fields: [
            {
              title: "Assignee",
              value: pdReceiver
            },
            {
              title: "Status",
              value: condition.status
            },
            {
              title: "Urgency",
              value: condition.urgency
            }
          ]
        }]
       }
    };

    return {
       error: {
         success: false,
         message: 'Error'
       }
    };
  }
}
