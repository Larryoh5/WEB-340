/* ============================================
 ; Title: Advanced Routing
; Author: Professor Krasso
; Date:   24 January 2021
; Modified By: Larry Ohaka
 ; Description: A way of creating a singlized instance of an object and they are responsible of managing the state/visibility of that object
 ;===========================================
*/

//link to my header
const header = require('../Ohaka-header.js');
//header
console.log(header.display('Larry', 'Ohaka', 'Exercise 1.3') + '\n');


var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('logger');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', ejs);

app.use(logger('dev'));
// 
app.get('/productId', function(req,res){
    var productId = parseInt(req.params.Id, 10);

    res.render('Index',{
        productId: productId
    });
});

http.createServer(app).listen(3001, function(){
    console.log('Application started and listening on port %s', 3001)
});

