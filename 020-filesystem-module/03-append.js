const fs = require("fs");
fs.appendFile("example.txt", "Some appended data", (err) => {
    if (err) console.log(err);
    else console.log("successfully appended to data the file");
});
