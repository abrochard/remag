// REQUIRES
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
//var private = require('./private.js');


// RUN EXPRESS
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// LISTEN TO PORT
app.listen(3000);

