const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: '465',
  secure: 'true',
  auth: {
    user: 'adithya7dhoni@gmail.com',
    pass: 'adithyalovesdhoni'
  }
})

const formSubmission = (data) => {
  let formData = JSON.parse(data),
      mailOptions = {
        from: 'Aditya <adithya7dhoni@gmail.com>',
        to: 'Adithya <adithyapsv@gmail.com>',
        subject: 'Contact Mail',
        text: 'Name: '+formData.name+'\nE-mail: '+formData.email+'\nOrganisation: '+formData.organisation+'\nSubject: '+formData.message
      }
  transporter.sendMail(mailOptions, (error, response) => {
      error ? console.log(error) : console.log('Message sent')
  });
}

module.exports = formSubmission
