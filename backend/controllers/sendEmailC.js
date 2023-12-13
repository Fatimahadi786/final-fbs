// sendEmailC.js

import nodemailer from 'nodemailer';

const sendEmail = async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    // Set up nodemailer transporter
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "245a4775cab957",
        pass: "7cd6402b9be6c9"
      }
    });


    // Define email options
    const mailOptions = {
      from: 'fatimahadi151214@gmail.com', // Sender address
      to: email, // Receiver address
      subject: subject,
      text: message,
    };

    // Send email
    await transport.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { sendEmail };
// // sendEmailC.js
// import nodemailer from 'nodemailer';
// import express from 'express';
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import mongoose from "mongoose";
// import emailRoutes from '../routes/sendEmailRoute.js';

// const app = express();

// // Define your routes
// app.use('/api/email', emailRoutes);

// const sendEmail = async (req, res) => {
//   try {
//     const { email, subject, message } = req.body;

//     // Set up nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'fatimahadi151214@gmail.com',
//         pass: 'fhadi1512'
//       }
//     });

//     // Define email options
//     const mailOptions = {
//       from: 'fatimahadi151214@gmail.com', // Sender address
//       to: email, // Receiver address
//       subject: subject,
//       text: message,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ success: true, message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error.message);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };

// export { sendEmail, app }; // Export the app instance if needed elsewhere
