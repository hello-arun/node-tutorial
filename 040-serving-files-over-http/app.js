const http = require("http");
const fs = require("fs")
const PORT = 3000;
const server = http.createServer((req, res) => {

    //Serving image
    const readStream = fs.createReadStream("./static/img-1.png")
    res.writeHead(200,{"Content-type":'image/png'})
    
    // Serving http page
    // const readStream = fs.createReadStream("./static/index.html")
    // res.writeHead(200,{"Content-type":'text/html'})
    readStream.pipe(res)
});

// Port number to listen from
server.listen(PORT);

// Help Message
console.log(`Open in google chrome\nhttp://localhost:${PORT}\n or \nhttp://localhost:${PORT}/banana`);
