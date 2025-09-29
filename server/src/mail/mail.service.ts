import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    // Configure the transporter with your email service credentials
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // use your email provider's SMTP
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password or email password
      },
    });
  }

  async sendContactEmail(name: string, email: string, message: string) {
    const mailOptions = {
      from: `"${name}" <${email}>`, // sender address
      to: process.env.CONTACT_RECEIVER_EMAIL, // your email
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
