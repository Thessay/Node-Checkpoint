//Task5
//create a file named email-sender  
//npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)
//Try to send your self email using this

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Get credentials from .env file
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Check if credentials exist
if (!EMAIL_USER || !EMAIL_PASS) {
  console.log("Missing EMAIL_USER or EMAIL_PASS in your .env file");
  process.exit(1);
}

// Create a function to send email
async function sendEmail() {
  try {
    // Create transporter (email connection)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail service
      auth: {
        user: EMAIL_USER, // Email from .env
        pass: EMAIL_PASS, // App password from .env
      },
    });

     // Email content
    const info = await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: "Hello from Node.js",
      text: "This email was sent using Node.js + Nodemailer!",
      html: "<h2>Hello from Node.js</h2><p>This was sent using Nodemailer.</p>",
    });

    console.log("Email sent successfully!");
    console.log("Response:", info.response);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
}

// Call function
sendEmail();
