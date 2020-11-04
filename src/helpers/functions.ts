import dotenv from "dotenv"
import nodemailer from "nodemailer"
import * as template from "../templates/email"

// Load env variables
dotenv.config()

interface emailData {
  name: String,
  email: String,
  message: String,
  to: String
}

export const sendMail = async (data: emailData) => {

  // Destructuring Data Info
  const { name, email, message, to } = data
  const defaultTo = "ts.mailer@gmail.com"

  // Creating a SMTP Transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true if port is 465
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });

  const mailOptions = {
    from: `ts.mailer@gmail.com`, // sender address
    to: `${to || defaultTo}`, // list of receivers
    subject: `TS Mailer: New Message`, // Subject line
    html: template.basic(name, email, message),
  }

  // Send mail tru transport and wait result
  const info = await transporter.sendMail(mailOptions)

  return info
}
