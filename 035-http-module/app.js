const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World from node.js");
        res.end();
    } else {
        res.write("Using some other domain");
        res.end();
    }
});

// Port number to listen from
server.listen(PORT);

// Help Message
console.log(`Open in google chrome\nhttp://localhost:${PORT}\n or \nhttp://localhost:${PORT}/banana`);
