var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // Idea 1. Ensure we are parsing the URL and only the URL.
    // Code 1. response.end('A POST request has been received at ' + request.url + ".")
    // Idea 2. OK, great. That works. Now either ++ or make a new key/value pair on globalCounter depending on the case.
    // Code 2.
    if (Object.keys(globalCounter).includes(request.url)) {
      globalCounter[request.url]++;
      console.log('SUCCESS: ' + request.url + " count is now " + globalCounter[request.url])
      response.end()
    }
    else {
      globalCounter[request.url] = 1;
      console.log('SUCCESS: ' + request.url + " count is now " + globalCounter[request.url])
      response.end()
    }
  } else if (request.method === 'GET') {
    // Idea 1. Ensure we are parsing the URL and only the URL.
    // Code 1. response.end('A GET request has been received at ' + request.url + ".")
    // Idea 2. OK, great. That works. Now just return whatever we have stored in the globalCounter Object.
    // Code 2.
    if (Object.keys(globalCounter).includes(request.url)) {
      response.end(globalCounter[request.url].toString())
    }
    else {
      response.end()
    }
  } else {
    response.statusCode = 404;
    response.end('An invalid request has been received. Only POST and GET are supported.');
  }
});

// Do not edit this line
module.exports = server;
