/* ============================================
 ; Title: Putting it all together
; Author: Professor Krasso
; Date:   24 January 2021
; Modified By: Larry Ohaka
 ; Description: 
 ;===========================================
*/


//Start program
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

//Logger
app.use(logger('short'));

//Get request, a path, and  function which accepts two objects (request and response)
app.get('/', function(req,res){
    res.render('index',{
        message: "Home Page"
    });
});

app.get("/about", function(req,res){
    res.render("about",{
        message:"About Page"
    });
});

app.get("/contact", function(req,res){
    res.render("contact",{
        message:"Contact Page"
    });
});

app.get("/products", function(req,res){
    res.render("products",{
        message:"Products Page"
    });
});
//Create a server on the HTTP object ,listen on a port
http.createServer(app).listen(8080, function(){
    console.log('Application starts and listening on port %s', 8080);
});


//End program