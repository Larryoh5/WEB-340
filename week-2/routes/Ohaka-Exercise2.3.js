
/* ============================================
 ; Title: Hello World with Express/ how to intercept specific routes/ how to create a global route handler on how to handle bad requests
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Larry Ohaka
 ;===========================================
*/

//Create variables to require the Express app
var express = require('express');
var http = require('http');
// Create a local variable for the express app 
var app = express();

//Router interceptors that will catch the url messages and give back a response
app.get("/", function(req, res){
    res.end("Welcome to the homepage. \n");

});

// Get request 
app.get('/about', function (req, res){
    res.end("welcome to the about page.\n");

});

app.get('/contact', function(req, res){
    res.end("Welcome to the contact page. \n");
});
// A route interceptor for bad requests
app.use(function(req, res){
    res.stateCode = 404;
    res.end('404!\n');
});
//Create node server and listen on port
http.createServer(app).listen(3000, function(){
    console.log("Application started on port %s", 3000);
});