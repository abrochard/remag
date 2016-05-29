// REQUIRES
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var https = require('https');
var keys = require('./private.js');
//var igdb = require('igdb-api-node');

// RUN EXPRESS
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var n = new Date();
var d = n.getFullYear().toString() + '-' + (n.getMonth()+1).toString() + '-' + n.getDate().toString();


var assembleOptions = function (today) {

    var options = {
        host: 'www.igdb.com',
        path: '/api/v1/games/search/?filters[release_date_eq]='+today,
        port: '443',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Token token="' + keys.igdbKey() + '"'
        }
    };
    return options;
}

var callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
        str += chunk;
    });

    response.on('end', function () {
        console.log(str);
    });
}

var options = assembleOptions(d);
var req = https.request(options, callback);
req.end();

var options = assembleOptions('2016-05-26');
var req = https.request(options, callback);
req.end();

// LISTEN TO PORT
app.listen(3000);

