const connection = require("./connection")

const getAllEmails =async()=>{
const emails = await connection.execute('SELECT * FROM emails')
return emails
}

const createEmail= async (task)=>{
    const {email}=task
    const query ='INSERT INTO emails (email) VALUES (?)'
    const [createEmail] = await connection.execute(query,[email])

    return createEmail
}



module.exports={
    getAllEmails,
    createEmail
}