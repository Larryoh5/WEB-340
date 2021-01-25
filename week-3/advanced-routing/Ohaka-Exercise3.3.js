
/* ============================================
 ; Title: Advanced Routing
; Author: Professor Krasso
; Date:   24 January 2021
; Modified By: Larry Ohaka
 ; Description: 
 ===========================================
*/


// Require statements for the require library
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// Assigned the express object to the app variable
var app = express();

// Uses the app variable to set the 'views' to specify which directory we want the application to look for the EJS files
app.set('views', path.resolve(__dirname, "views"));

//Tells Express to use the View Engine
app.set("view engine", 'ejs');

//Configure Logger
app.use(logger('dev'));

//Get request, a path, and  function which accepts two objects (request and response)
app.get('/:productId', function(req,res){
    var productId = parseInt(req.params.productId, 10);
    //Output to the index.ejs page
    res.render('index',{
       productId: productId
    });
});

//Create a new server on the HTTP object ,listen on a port
http.createServer(app).listen(3001, function(){
    console.log('Application starts and listening on port %s', 3001);
});

