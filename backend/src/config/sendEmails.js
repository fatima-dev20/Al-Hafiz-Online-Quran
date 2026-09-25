import nodemailer from "nodemailer";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

export const sendEmails = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4,
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 15000,
});