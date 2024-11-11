const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


exports.sendEmailNotification = functions.firestore
    .document("contactRequests/{docId}")
    .onCreate((snap, context) => {
        const data = snap.data();
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Email where you want to receive notifications
            subject: `New Contact Request from ${data.name}`,
            text: `Message from ${data.name} (${data.email}): ${data.message}`,
        };

        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
            } else {
                console.log("Email sent:", info.response);
            }
        });
    });
