const express = require("express");
const path = require("path");
const app = express();

// __dirname : Where app.js is
app.use("/public", express.static(path.join(__dirname)));
const PORT = 3000; // Port to listen from

// Home route
app.get("/", (req, res) => {
    // res.send("Hello Express");
    res.sendFile(path.join(__dirname,'static','index.html'))
});

// Another route
app.get("/example", (req, res) => {
    res.send("Hitting example route");
});

// Get data from webpage and send back the same
app.get("/example/:name/:age", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Name: ${req.params.name}, age: ${req.params.age}`);
});

app.listen(PORT);

console.log(`Home ruote
http://localhost:${PORT}

or another route
http://localhost:${PORT}/example

or for route params, to send data to server
http://localhost:${PORT}/example/Arun/26

or to use query string params
http://localhost:${PORT}/example/Arun/26?qualification=MSc&institute=KAUST`);
