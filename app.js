const http = require("http");
// listen to this port
const port = 7000;
//call fs library, file handling we need
const fs = require("fs");
// create server and server variable, call create server function
// take the request and response parameters
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  // takes the file we want to read
  // error property and data
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      // the case if there was no error
      // data = all the html data
      // from here we can use the dot method to pick the specific data we want to target
      res.write(data);
    }
    res.end();
  });
});
server.listen(port, function (error) {
  if (error) {
    // passes error if there is an error, log out a message
    // check logs and see the error that happened
    console.log("Something went wrong", error);
  }
  // server is listening on port
  else {
    console.log("Server is listening on port " + port);
  }
});

const http = require("http");
const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("")(app);

app.listen(PORT, function () {
  console.log("Lstening on PORT: " + PORT);
});
