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


// GET THE GAMES
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = yyyy+'-'+mm+'-'+dd;

var options = igdb.assembleOptions(keys.igdbKey(), today);
var req = https.request(options, igdb.callback);
req.end();

// LISTEN TO PORT
app.listen(3000);
