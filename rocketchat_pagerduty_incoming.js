class Script {
  process_incoming_request({ request }) {
    // console is a global helper to improve debug
    console.log(request.content);

    var alertColor = "warning";
		var condition = request.content.messages[0].incident;
		var pdReceiver = ":rocket:"


    if(request.content.messages[0].incident.status === "triggered"){ alertColor = "danger"; pdReceiver = condition.assignments[0].summary; }
    else if (request.content.messages[0].incident.status === "resolved") { alertColor = "good"; pdReceiver = condition.assignments[0].summary; }
    else  { pdReceiver = condition.assignments[0].summary; }

    return {
      content:{
        attachments: [{
          title: condition.title,
          pretext: condition.summary,
          title_link: condition.html_url,
          text: condition.description,
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
