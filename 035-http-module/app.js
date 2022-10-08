const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
    res.write("Hello World from node.js");
    res.end();
});

// Port number to listen from
server.listen(PORT);

// Help Message
console.log(`Open in google chrome\nhttp://localhost:${PORT}`);