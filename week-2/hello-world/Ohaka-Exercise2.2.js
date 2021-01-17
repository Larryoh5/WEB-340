
/* ============================================
 ; Title: Hello World with Express/ building blocks for routing in a node application
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Larry Ohaka
 ;===========================================
*/

var express = require('express');
// the library that allows to start server
var http = require('http');

// The variable for the Express application
var app = express();

app.use(function(req, res){
    //log a message to the console then return the value to whatever application ro client s tries to access this url
    console.log('In comes a request to: %s', req.url);
    res.end('Hello World\n');
})
//A new server and listen on a port and log a message that lets the user know that the application has started and what server it's listed on
http.createServer(app).listen(8080, function()
    {
        console.log('Application started on port %s', 8080);
    
    });