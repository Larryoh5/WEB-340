/*
==========================================
; Title: Exercise 6.3 - mongoose
; Author:Larry Ohaka
; Date: 14 Feb 2021
; ========================================
*/

// import libraries
var express = require("express");
var http = require('http');
var logger = require('logger');
var mongoose =  require('mongoose');

var mongoDB = ''
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on( 'error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function(){
    console.log('Application connected to mLab');
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function (){
    console.log('Application started and listening to port 5000')
});
 
