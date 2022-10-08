const fs = require("fs");

const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("./example2.txt");

// This will get data in chunks insted of whole file
readStream.on("data", (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
});
