/*
==========================================
; Title: Exercise 7.3 - Mocha and CHai
; Author:Larry Ohaka
; Date: 21 Feb 2021
; ========================================
*/


// Import the file with the function
const fruits = require("../jones-fruits");

// Import Chai and the assert module
const chai = require("chai");
const assert = require("assert");

// Test function
describe("fruits", function () {
  it("should return an array of fruits", function () {
    let f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
