'use strict';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'support@effy.co.in',
        pass: 'supporteffypassword'
    }
});

let Mailer = {

	sendMail: function(){
		const mailOptions = {
			from: 'fromEmail@mailer.com', // sender address
			to: 'toEmail@mailer.com', // list of receivers
			subject: 'Email using NodeJS', // Subject line
			html: '<p>Hiya! This thing works. <b>Hurrah!</b></p>'// plain text body
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
	            return console.log(error);
	        }
	        console.log('Message sent: %s', info.messageId);
	        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		});
	}

};

module.exports = Mailer;