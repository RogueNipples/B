var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var botRegexER1 = /er\s/;
  var botRegexER2 = /er$/;
  var x = Math.floor((Math.random() * 5) + 1);
	
  if(request.name != "Bot 8" && x > 4) {
  
  if(request.text && botRegexER1.test(request.text)) {
    this.res.writeHead(200);
    postMessage1(request.text);
    this.res.end();
  }
  else if(request.text && botRegexER2.test(request.text)) {
    this.res.writeHead(200);
    postMessage2(request.text);
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  }
}

//==========================================================================================

function postMessage1(variable) {
  var botResponse, options, body, botReq;
  
var m,n,o;	
	
    var n = variable.indexOf("er ");
    if (variable.indexOf(" ", n) == -1) {
    m = variable.length;
    }
    else {
    var m = variable.indexOf(" ", n);
    }
    if (variable.lastIndexOf(" ", n) == -1) {
    o = 0;
    }
    else {
    var o = variable.lastIndexOf(" ", n);
    }
    var wordlength = m-o;
    var substring = variable.substr(o,wordlength);
    
    var finalstring = substring.concat("? I barely know her!")
	
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

//==========================================================================================
function postMessage2(variable) {
  var botResponse, options, body, botReq;
  
var m,n,o;	
	
    var n = variable.lastIndexOf("er");
    if (variable.indexOf(" ", n) == -1) {
    m = variable.length;
    }
    else {
    var m = variable.indexOf(" ", n);
    }
    if (variable.lastIndexOf(" ", n) == -1) {
    o = 0;
    }
    else {
    var o = variable.lastIndexOf(" ", n);
    }
    var wordlength = m-o;
    var substring = variable.substr(o,wordlength);
    
    var finalstring = substring.concat("? I barely know her!")
	
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
//==========================================================================================



exports.respond = respond;
