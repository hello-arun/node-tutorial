const fs = require("fs");

const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("./example2.txt");

// This will get data in chunks insted of whole file
readStream.on("data", (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
});

// The above task can more easily be done using pipes.
// read more in 02-pipe.js