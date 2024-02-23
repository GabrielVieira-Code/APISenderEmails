
const app = require('./app.js')
require('dotenv').config()

const PORT = process.env.PORT||3333
app.listen(3333,()=>{
    console.log('olar mundo',PORT)
})