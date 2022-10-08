const fs = require("fs");

// Read directory
fs.readdir("tutorial", (err,files) => {
    if (err) console.log(err);
    else{
        for( let file of files){
            console.log(file)
        }
    }
});
