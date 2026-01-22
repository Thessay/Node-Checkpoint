//Task3
//Second, create a program that reads and console.log data from hello.txt

//Firstly, create the hello.txt file and write data into it

import {error} from "console"
import fs from "fs"

fs.writeFile ("hello.txt", "I am writing into hello.txt file", "utf-8", (err) => {

    //print error if any
    if (err){
        console.log ("Error creating file", err);
            return;
    }
// If no error
    console.log ("File successfully created")


});

//Secondly, read the hello.txt file and print the data in it

fs.readFile("hello.txt", "utf-8", (err, data) => {
    //Print error if any
    if (err){
        console.log ("Error reading file", err);
        return;
    }

    //print no error
    console.log ("File was successfully read, and the data is: ");
    console.log (data)

})