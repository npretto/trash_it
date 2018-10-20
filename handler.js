'use strict';
const { getBin } = require("db")

module.exports.hello = async (event, context) => {

  var body = JSON.parse(event.body)
  console.log("\n\n\ PORCO DIO \n\n\n\n\n\n\n");
  console.log(body);


  var par = body.queryResult.parameters;
  var tMaterial = par.Tmaterial;
  var tObject = par.Tobject;

  console.log("ITEM" + tObject)
  return {
    statusCode: 200,
    body: JSON.stringify({
      "payload": {
        "google": {
          "expectUserResponse": true,
          "richResponse": {
            "items": [
              {
                "simpleResponse": {
                  "textToSpeech": getBin(tMaterial)
                }
              }
            ]
          }
        }
      }
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

// 'use strict';


// const {WebhookClient} = require('dialogflow-fulfillment');
// const {Card, Suggestion} = require('dialogflow-fulfillment');



// process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

// module.exports.hello = functions.https.onRequest((request, response) => {
//   const agent = new WebhookClient({ request, response });
//   console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
//   console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

//   function welcome(agent) {
//     agent.add(`Welcome to my agent!`);
//   }

//   function fallback(agent) {
//     agent.add(`I didn't understand`);
//     agent.add(`I'm sorry, can you try again?`);
// }

//    // Uncomment and edit to make your own intent handler
//    // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
//    // below to get this function to be run when a Dialogflow intent is matched
//    function yourFunctionHandler(agent) {
//        console.log("aaaaa", request.body.parmas)

//      agent.add("una stringa di messaggio");
//      agent.add(new Card({
//          title: `Title: this is a card title`,
//          imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
//          text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
//          buttonText: 'This is a button',
//          buttonUrl: 'https://assistant.google.com/'
//        })
//      );
//      agent.add(new Suggestion(`Quick Reply`));
//      agent.add(new Suggestion(`Suggestion`));
//      agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
//    }

//   // // Uncomment and edit to make your own Google Assistant intent handler
//   // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
//   // // below to get this function to be run when a Dialogflow intent is matched
//   // function googleAssistantHandler(agent) {
//   //   let conv = agent.conv(); // Get Actions on Google library conv instance
//   //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
//   //   agent.add(conv); // Add Actions on Google library responses to your agent's response
//   // }
//   // // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs/tree/master/samples/actions-on-google
//   // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

//   // Run the proper function handler based on the matched Dialogflow intent name
//   let intentMap = new Map();
//   intentMap.set('Default Welcome Intent', welcome);
//   intentMap.set('Default Fallback Intent', fallback);
//   intentMap.set('getWord', yourFunctionHandler);
//   // intentMap.set('your intent name here', googleAssistantHandler);
//   agent.handleRequest(intentMap);
// });
