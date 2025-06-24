// hello-server.js
const http = require("http");
const myName = "Rahique";

const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response
  res.end(`<h1>Hello, I'm ${myName}! Saying Hi from my first Node.js server!</h1>\n`);
});

const PORT = 2505;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log("Press Ctrl+C to stop the server");
});
