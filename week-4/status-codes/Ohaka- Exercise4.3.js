/*
===============================================
; Title: Exercise 4.3 HTTP status Codes
; Author: Professor Krasso
; Date: 31 January 2021
; Modified By: Larry Ohaka
; Description: Demonstrate what status codes are and how to manipulate status codes-- their importance on client side and service side communication environment
===============================================
*/

// Imports required modules
var express = require('express');
var http = require('http');
// Initializes the app
var app = express();

// Requests using status codes
app.get('/not-found', function(req, res) {
  res.status(404);

  res.json({
    error: 'Sorry! Page not found.'
  })
});

// Returns a JSON success message for a 200 status code

app.get('/ok', function(req, res) {
  res.status(200);

  res.json({
    message: 'Page load was successful!'
  })
});

// Returns a JSON error message for a 501 status code
app.get('/not-implemented', function(req, res) {
  res.status(501);

  res.json({
    error: 'Oops! That page has not been implemented.'
  })
});

//  Creates a server listening on port 8080
http.createServer(app).listen(8080, function(){
  console.log('Server is live on PORT 8080');
});