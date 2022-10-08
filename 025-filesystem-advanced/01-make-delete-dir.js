const fs = require("fs");

// Make Folder
fs.mkdir("tutorial", (err) => {
    if (err) console.log(err);
    else console.log("folder created");
});

// Delete Folder: Folder should be empty
fs.rmdir("tutorial", (err) => {
    if (err) console.log(err);
    else console.log("folder deleted");
});
