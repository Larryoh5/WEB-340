/*
==========================================
; Title: Exercise 7.4 EMS (Milestone 3): Mongoose Schema and Model Development
; Author:Larry Ohaka
; Date: 21 Feb 2021
; ========================================
*/


// Require statements
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// Employee Schema
let employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
module.exports = mongoose.model("Employee", employeeSchema);