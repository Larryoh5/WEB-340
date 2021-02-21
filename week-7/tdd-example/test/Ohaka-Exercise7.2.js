/*
==========================================
; Title: Exercise 7.2 - TDD in Action
; Author:Larry Ohaka
; Date: 14 Feb 2021
; ========================================
*/


// Include the assert module
const assert = require("assert");

// Test function
describe("String#split", function () {
  it("should return an array of fruits", function () {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
