const emailModel = require('../Models/emailModel');


const getAllEmails=async(req ,res)=>{
    const [emails] = await emailModel.getAllEmails()
  return res.status(201).json(emails)
};
const createEmails= async (req ,res)=>{
  const createdEmail =await  emailModel.createEmail(req.body)
  return  res.status(201).json(createdEmail); // En
}
module.exports={
    getAllEmails,
    createEmails
}