/*
==========================================
; Title: Exercise 5.2 - EJS Templates
; Author:Larry Ohaka
; Date: 7 Feb 2021
; ========================================
*/

// import libraries
const express = require("express");

const http = require("http");

const path = require("path");

// initialize app
const app = express();

app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use EJS
app.set("view engine", "ejs");

// Declare an array of names
var petNames = ["Kaido", "Katsu", "JJ", "Luna"];

// Handles the response to the index page
app.get("/", function (request, response) {
  response.render("index", {
    names: petNames,
  });
});

// Create server and listen on Port 3000
http.createServer(app).listen(3000, function () {
  console.log("Application started on port 3000");
});