var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var x = Math.floor((Math.random() * 7) + 1);
	
  if(request.name != "Ol' Floppy") {
  
  if(request.text) {
    this.res.writeHead(200);
    postMessage1(request.text);
    this.res.end();
  }
}

//==========================================================================================

function postMessage1(variable) {
  var botResponse, options, body, botReq;
  
  var newstring = [];
var i;
for (i = 10; i < str.length; i++) { 
if (str.substr(i,1) == "a")
   {
      newstring[i] = "oodle";
   }
   else
   {
      newstring[i] = str.substr(i,1);
   }
}

var finalstring = (newstring.toString()).replace(/,/g, '');
    
    var finalstring = substring.concat("er? I barely know her!")
	
        botResponse = finalstring;


  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}



exports.respond = respond;
