const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
const log = console.log;

// Set up transporter for Outlook 365
let transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
        user: 'mailsender@lookingpoint.com',
        pass: ')cqk2PqH3hKJ'
    },
    debug: true,
    logger:true,
});

transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: './views/'
}));


let mailOptions = {
    from: 'ryan@lookingpoint.com',
    to: 'jeremy.worden@gmail.com',
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    template: 'index',
    context: {
        name: 'Accime Esterling'
    } // send extra values to template
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});