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
var logger = require('morgan');
var path =  require('path');
var mongoose = require('mongoose');


var Employee = require("./models/employee");

// Connect to MongoDB
var mongoDB = "mongodb+srv://fakeurl";
mongoose.connect(mongoDB, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});

// Initialize app
const app = express();

// Employee model
const employee = new Employee({
  firstName: "Greg",
  lastName: "Thomas",
});

var app = express();
app.set("views", path.resolve(__dirname,"views"));

app.set("view engine", "ejs");

app.use(logger("short"));


//Home Page
app.get("/", function(request,response){
    response.render("index", {
        title:"Home Page"
    });
});

//View
app.get("/view", function (request, response) {
    response.render("view", {
      title: "Manage",
    });
  });
  
  // New
  app.get("/new", function (request, response) {
    response.render("new", {
      title: "Add Employee",
    });
  });
  
  // List
  app.get("/list", function (request, response) {
    response.render("list", {
      title: "View Employes",
    });
  });

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});