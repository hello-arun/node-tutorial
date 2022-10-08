const fs = require("fs");

const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("./example-compressed.gz");

// To copy content of readStream to Write Stream
// readStream.pipe(writeStream);

// Lets compress data while writing
const zlib = require("zlib");
const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);

// you can use Gunzip to uncompress the file
// this is your handson exercise??
