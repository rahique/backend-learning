// hello-server.js
const http = require("http");
const myName = "Rahique";

const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { "Content-Type": "HTML" });

  // Send response
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rahique's Server</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      height: 100vh;
      font-family: 'Space Grotesk', sans-serif;
      background-color: #0f0f0f;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    /* Grid lines background */
    body::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: 
        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 40px 40px;
      z-index: 0;
    }

    .content {
      z-index: 1;
      color: white;
    }

    .highlight {
      font-weight: 700;
      background: linear-gradient(270deg, #ff00c8, #00ffe7, #fffb00, #ff00c8);
      background-size: 600% 600%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientShift 6s ease infinite;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  </style>
</head>
<body>
  <div class="content">
    <h1>Hello I'm <span class="highlight">Rahique</span></h1>
    <p>This is my first server</p>
  </div>
</body>
</html>
`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log("Press Ctrl+C to stop the server");
});
