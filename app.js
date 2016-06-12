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


// var nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');
// // create reusable transporter object using the default SMTP transport
// //var transporter = nodemailer.createTransport(smtpTransport('smtps://remag%40gmx.fr:' + keys.emailPasswd() + '@mail.gmx.com'));
// var transporter = nodemailer.createTransport(smtpTransport({
//     host: 'mail.gmx.com',
//     port: 587,
//     secure: true,
//     auth: {
//         user: 'remag@gmx.fr',
//         pass: keys.emailPasswd()
//     }
// }));

// // setup e-mail data with unicode symbols
// var mailOptions = {
//     from: '"Fred Foo" <foo@blurdybloop.com>', // sender address
//     to: 'aaa.brochard@gmail.com', // list of receivers
//     subject: 'Hello ', // Subject line
//     text: 'Hello world ', // plaintext body
//     html: '<b>Hello world </b>' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });
