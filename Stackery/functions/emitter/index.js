var AWS = require("aws-sdk");


module.exports = async message => {
  const ports = JSON.parse(process.env.STACKERY_PORTS)
  console.dir(ports[0][0].topicArn);



  let snsMessage = {
    "default": "edgar",
    "email": "edgar",
    "sqs": "edgar",
    "lambda": "edgar",
    "http": "edgar",
    "https": "edgar",
    "sms": "edgar",
    "APNS": "{\"aps\":{\"alert\": \"edgar\"} }",
    "APNS_SANDBOX": "{\"aps\":{\"alert\":\"edgar\"}}",
    "APNS_VOIP": "{\"aps\":{\"alert\":\"edgar\"}}",
    "APNS_VOIP_SANDBOX": "{\"aps\":{\"alert\": \"edgar\"} }",
    "MACOS": "{\"aps\":{\"alert\":\"edgar\"}}",
    "MACOS_SANDBOX": "{\"aps\":{\"alert\": \"edgar\"} }",
    "GCM": "{ \"data\": { \"message\": \"edgar\" } }",
    "ADM": "{ \"data\": { \"message\": \"edgar\" } }",
    "BAIDU": "{\"title\":\"edgar\",\"description\":\"edgar\"}",
    "MPNS": "<?xml version=\"1.0\" encoding=\"utf-8\"?><wp:Notification xmlns:wp=\"WPNotification\"><wp:Tile><wp:Count>ENTER COUNT</wp:Count><wp:Title>edgar</wp:Title></wp:Tile></wp:Notification>",
    "WNS": "<badge version=\"1\" value=\"23\"/>"
  };
  newMessage = "edgar"
  var sns = new AWS.SNS();
  var params = {
    Message: newMessage,
    Subject: "Test SNS From Lambda",
    TopicArn: ports[0][0].topicArn,
    MessageAttributes: {
      DataType: 'String'
    }
  };
  try {
    let returnVal = await sns.publish(params);
    return {}
  } catch (err) {
    console.dir(err)
    return (err)
  }
}
