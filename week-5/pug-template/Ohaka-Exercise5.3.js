/*
===============================================
; Title: Exercise 5.3 Pug Templates
; Author: Professor Krasso
; Date: 31 January 2021
; Modified By: Larry Ohaka
; Description: Create a JSON API through node.js and making calls to make sure requests are coming back in JSON format
===============================================
*/
//require
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');


var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

//route
app.get('/', function(req, res){
    res.render('index', {
        message: 'Never, never be afraid to do whats right, especially if the well-being of a person or animal is at stake. - MLK'
    });
});

//create
http.createServer(app).listen(8080, function(){
    console.log('Application started and listening on port 8080')
})