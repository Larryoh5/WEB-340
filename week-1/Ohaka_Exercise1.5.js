/* ============================================
 ; Title: Hello World
; Author: Professor Krasso
; Date:   10 January 2021
; Modified By: Larry Ohaka
 ;===========================================
*/


//Variable declaration:

var http = require("http");

function processRequest(req, res) {

var body = "It's finally 2021!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);

