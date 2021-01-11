/* ============================================
 ; Title: Modules
; Author: Professor Krasso
; Date:   10 January 2021
; Modified By: Larry Ohaka
 ;===========================================
*/


var url = require('url');
var parsedURL = url.parse('https://github.com/Larryoh5/WEB-340/profile?name=larry');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
