const express =require('express')
const controller = require('./controllers/emailController')

const router = express.Router()

router.get('/emails',controller.getAllEmails)
router.post('/emails',controller.createEmails)
router.post('/sendemail',controller.sendEmail)
module.exports =  router;