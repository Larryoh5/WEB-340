// imports required modules
const express = require('express');
const http = require('http');
// initializes the app
const app = express();
// GET request
app.get("/get-request", function (request, response) {
    response.send("GET request sent");
  });


  
  // PUT request
  app.put("/put-request", function (request, response) {
    response.send("PUT request sent");
  });
  
  // POST request
  app.post("/post-request", function (request, response) {
    response.send("Post received");
  });
  
  // DELETE request
  app.delete("/delete-request", function (request, response) {
    response.send("Deleted");
  });

//Creates a server listening on PORT 8080
http.createServer(app).listen(8080, function(){
  console.log('Server is live on PORT 8080');
});