let NodeMailer = require('nodemailer');


class Mailer {
    constructor(options){
        this.transporter = NodeMailer.createTransport({
            host: process.env.MAIL_HOST || 'smtp.gmail.com',
            port: process.env.MAIL_PORT || 465,
            secure: process.env.MAIL_HOST || true,
            auth: {
                user: process.env.MAIL_USER || 'dungpv10@gmail.com',
                pass: process.env.MAIL_PASS || ''
            }
        });
        this.options = Object.assign({
            from : '', to : '', subject : '', text : '', html : ''
        }, options);
    }

    sendMail() {
        return new Promise((err, reject) => {
            this.transporter.sendMail(this.options, (err, info) => {
                if(err) return reject(err);
                resolve(info);
            });
        });
    }

}


module.exports = Mailer;