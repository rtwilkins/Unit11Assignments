/**
 * Problem #3: Submit file websvr.js
 Using Node.js http module, write a Node.js script that starts a simple HTTP Server.
 The HTTP server should run on port 8001, and writes back to client:

 1.	response.writeHead(200, {'Content-Type': 'text/html'});
 2.	response.write('Hello World, my name is John Smith'); //Fill in your name
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 8001

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World my name is Robert Wilkins\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
