require('dotenv').config();

const nodemailer = require('nodemailer');

const user = "contatocontextnared@gmail.com";
const pass = process.env.GMAIL_PASS;

module.exports = (app) =>{
   app.post('/enviarformulario',(req, resp)=>{
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465, 
            secure: true,
            auth: {
                user,
                pass
            },
        });
    
        transporter.sendMail({
            from: user,
            to: user,
            replyTo: req.body.email,
            subject: req.body.nome,
            text: `${req.body.assunto}`,
            html: req.body.assunto
        })
        .then(information => {
            console.log(information)
            resp.send(information)
        })
        .catch(error => {
            console.log(error)
        })
    });
}
