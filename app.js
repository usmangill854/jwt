require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const port =2000
const  mainRouter  = require('./routes/main')
//middleware
app.use(express.json())

const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')


 app.get('/',(req,res) => {
    res.send('homepage')
 })
 
 app.use('/api/v1',mainRouter)


 
app.use(errorHandler)
app.use(notFound)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})