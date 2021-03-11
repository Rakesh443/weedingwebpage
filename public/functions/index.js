const functions = require("firebase-functions");

<<<<<<< HEAD
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')

admin.initializeApp()
=======
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
>>>>>>> 21ed0bf4083ebe91fc45ebef0c27a4506d4f6eeb
// require('dotenv').config()

// const {SENDER_EMAIL, SENDER_EMAIL_PASSWORD} = process.env;


<<<<<<< HEAD
export const sendemail = functions.https.onCall(async(data,context) => {
    const sender = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 465,    
        secure:true,
        auth : {
            user : 'rakesh85238@gmail.com',
            pass : 'mayday@15'
        }
    })

    sender.sendMail({
        from : 'dontreply@gmail.com',
        to : 'rk20035@gmail.com',
        subject : 'Test mail',
        text : 'Test mail'  
    }).then(res => console.log('sent')).catch(err=>console.log(err))

})


=======
exports.sensInvitation=functions.firestore.document("Guests")
.onUpdate((snap, ctx) => {
    // const data = snap.data();
const authData = nodemailer.createTransport({
    host: 'smtp.gmail.com',
port: 465,    
service: 'gmail',
secure: true,
auth: {
    user: "rakesh85238@gmail.com",
    pass: "mayday@15"
}
})
authData.sendMail({
    from: "dontreply@gmail.com",
    to: "rakesh.great.6565@gmail.com",
    subject: "Test mail",
    text: "Test mail"
}).then(res =>{
    console.log("email sent")
})
.catch(err=>{
    console.log(err)
})
})
>>>>>>> 21ed0bf4083ebe91fc45ebef0c27a4506d4f6eeb
