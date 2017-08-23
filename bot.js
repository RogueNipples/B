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
}

//==========================================================================================

function postMessage1(variable) {
  var botResponse, options, body, botReq;
  
    var str = variable;
    var n = str.indexOf(" ");
    
    var indices = [];
    for(var i=0; i<str.length;i++) {
        if (str[i] === " ") indices.push(i+1);
    }
    
    var newstring = [];
    var B = '\u1F171'
    
    for (var j=0; j<str.length;j++) {

	if(j==0) {
    newstring[j] = B;
    }
    else if(indices.indexOf(j) == -1) {
        newstring[j] = str.substr(j,1);
    }
    else
    {
        newstring[j] = B;
    }

    }
    
    var finalstring = (newstring.toString()).replace(/,/g, '');
	
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
