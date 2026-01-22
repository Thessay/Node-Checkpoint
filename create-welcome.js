//Task3
//First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".

import { error } from "console"
import fs from "fs"

fs.writeFile("welcome.txt", "Hello Node", "utf-8", (err) => {
    //print the error
    if (err){
        console.error("Error creating file", err);
        return;
    
    }
    //If no error
    console.log("File successfully created");
});

