//Task4
//Create a file named "password-generator"  
//(use npm install generate-password : (https://www.npmjs.com/package/generate-password)
//Create a function that generates random passwords and console.log() //that password.

import generator from "generate-password"

function generateRandomPassword (){

    const password = generator.generate({
        length: 10,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        strict: true,
    });

    //Print generated password
    console.log ("The password generated is :", password)
}
generateRandomPassword();