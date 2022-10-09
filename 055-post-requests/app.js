const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

// __dirname : Where app.js is
app.use("/public", express.static(path.join(__dirname)));
// Parse data in encoded form
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 3000; // Port to listen from

// Home route
app.get("/", (req, res) => {
    // res.send("Hello Express");
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

// post method
app.post("/", (req, res) => {
    console.log(req.body);
    // database work here
    res.send("Successfully posted data!!");
});

app.listen(PORT);

console.log(`Home ruote
http://localhost:${PORT}`);
