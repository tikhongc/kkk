

const sgMail = require('@sendgrid/mail');
const APIkey='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';
sgMail.setApiKey(APIkey);


const msg = {
    to: '1205542199@qq.com', // Change to your recipient
    from: '1205542199@qq.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })