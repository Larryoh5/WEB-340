/*
===============================================
; Title: Exercise 4.2 JSON API's
; Author: Professor Krasso
; Date: 31 January 2021
; Modified By: Larry Ohaka
; Description: Create a JSON API through node.js and making calls to make sure requests are coming back in JSON format
===============================================
*/

// imports required modules
const express = require('express');
const http = require('http');
// initializes the app
const app = express();

// returns a JSON object
app.get('/customer/:id', function(req, res) {

    
// stores value of :id in url
  const id = parseInt(req.params.id, 10);
  res.json({
    firstName: 'LARRY',
    lastName: 'OHAKA',
    favColors: ['Yellow', 'Black'],
    customerId: id
  })
});

//Creates a server listening on PORT 8080

http.createServer(app).listen(8080, function(){
  console.log('Server is live on PORT 8080');
});