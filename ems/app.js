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
var helmet = require ('helmet');
var csrf = require("csurf");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");


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

const app = express();

// Use Statements
app.use(helmet.xssFilter());
app.use(logger("short"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
  const token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use EJS
app.set("view engine", "ejs");

// Set the port
app.set("port", process.env.PORT || 8080);

app.get("/", function (request, response) {
  response.render("index", {
    title: "Home Page",
    message: "XSS Prevention Example",
  });
});

app.get("/new", function (request, response) {
  response.render("new", {
    title: "Add Employee",
  });
});

app.get("/list", function (request, response) {
  Employee.find({}, function (error, employees) {
    if (error) throw error;
    if (employees.length > 0)
      response.render("list", {
        title: "Employee List",
        employees: employees,
      });
  });
});

app.post("/process", function (request, response) {

  if (!request.body.firstName && !request.body.lastName) {
    response.status(400).send("Entries must have a name");
    return;
  }
  const employeeName = request.body.firstName + request.body.lastName;
  console.log(employeeName);

 
  const employee = new Employee({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
  });

  // save
  employee.save(function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeName + " saved successfully!");
      response.redirect("/");
    }
  });
});

//Employees info
app.get("/view/:queryName", function (req, res) {
  var queryName = req.params["queryName"];
  Employee.find({ lastName: queryName }, function (error, employees) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        res.render("view", {
          title: "Manage",
          employee: employees,
        });
      }
    }
  });
});
http.createServer(app).listen(app.get("port"), function () {
  console.log("Application started on port " + app.get("port"));
});