
/* ============================================
 ; Title: EJS Views
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Larry Ohaka
 ;===========================================
*/

var http = require("https");

var express = require("express");

var path = require("path");

var app = express();

//Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname,"views"));

// Tell Express to use the EJS view engine
app.set("view engine", "ejs"); 

app.get("/", function(request, response){
    response.render("index",{
        firstName:"Larry",
        lastName:"Ohaka",
        address:"1210 S Northland Arlington,VA 22003"
        
    });
});

http.createServer(app).listen(8080, function(){
    console.log("ESJ-Views app started on port 8080.");

});

