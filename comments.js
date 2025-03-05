// Create web server
// Create a web server that listens on port 3000. When you visit http://localhost:3000/ in your browser, it should display "Hello, World!".

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});