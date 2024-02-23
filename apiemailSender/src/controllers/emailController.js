const emailModel = require('../Models/emailModel');
const nodemailer = require('nodemailer');


const getAllEmails=async(req ,res)=>{
    const [emails] = await emailModel.getAllEmails()
  return res.status(201).json(emails)
};
const createEmails= async (req ,res)=>{

  const createdEmail =await  emailModel.createEmail(req.body)
  return  res.status(201).json(createdEmail); // En
}

const sendEmail=async (req, res)=>{
const transport = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  secure: false,
  auth: {
      user: 'Seu email',
      pass: 'Sua Senha',
  }
});

  const { to, subject, html, text } = req.body;
  

  // Enviar o e-mail
  transport.sendMail({
      from: 'seu email',
      to: to,
      subject: subject,
      html: html,
      text: text,
  })
  .then(() => {
      res.send('E-mail enviado com sucesso!');
  })
  .catch((err) => {
      console.error('Erro ao enviar e-mail:', err);
      res.status(500).send('Erro ao enviar e-mail');
      console.log(to,  subject,text);
  });
}
module.exports={
    getAllEmails,
    createEmails,
    sendEmail
}