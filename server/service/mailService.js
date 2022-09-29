const nodemailer = require('nodemailer')

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure:false,
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASSWORD,
         }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from:process.env.SMTP_USER,
            to,
            subject:'Activation account',
            text:'',
            html:
                `
                    <div>
                        <h1 style="
                        color: black;
                        ">For Activation click on the link</h1>
                        <a style="
                        background-color: #024E82;
                        padding: 20px;
                        color: #ffffff; 
                        box-sizing: border-box;
                        display:flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        "  href="${link}">${link}</a>
                    </div>
                `
        })
    }
}

module.exports = new MailService()