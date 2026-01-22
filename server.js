//Task2
//create a server  
//Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000

import http from "http";

//const http = require("http");

//Create the Server

const server = http.createServer((request, response) => {
     // Set the response header:
  // 200 means OK (request successful)
  // Content-Type: text/html tells the browser we're sending HTML

  response.writeHead (200, {"ContentType" : "text/html"});

  //Send the response body and end the response

  response.end("<h1>Hello Node!!!</h1>\n");
});

//Start running on port 3000
server.listen(3000, () => {
    // The message below shows in the terminal when the server is running
  console.log("Server running at http://localhost:3000");
});

