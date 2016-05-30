// REQUIRES
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var https = require('https');
var igdb = require('./igdb.js');
var keys = require('./private.js');

// RUN EXPRESS
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var n = new Date();
var d = n.getFullYear().toString() + '-' + (n.getMonth()+1).toString() + '-' + n.getDate().toString();


// var options = assembleOptions(d);
// var req = https.request(options, callback);
// req.end();

var options = igdb.assembleOptions(keys.igdbKey(),'2016-05-26');
var req = https.request(options, igdb.callback);
req.end();

// LISTEN TO PORT
app.listen(3000);

