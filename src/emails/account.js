const sgMail = require('@sendgrid/mail') // sendgrid name, not file route

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'david.arinder@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'david.arinder@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Sorry to see you go, ${name}. Is there anything we could have done to keep you?`
    })
}

module.exports = { sendWelcomeEmail, sendCancellationEmail }