const nodemailer = require('nodemailer');

async function sendEmail(from, to, subject, message) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'yourgmailusername',
      pass: 'yourgmailpassword'
    }
  });

  let info = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: message
  });

 console.log('Message sent: %s', info.messageId);
}