const port = 3000
const express = require('express')
const app = express()
const router = require('./Routes/RegisterRoute/Registerroutes.js')
const mongoose = require('mongoose');


//middlewares
app.use(router)


app.listen(port, async ()=>{
    console.log('server open on port ' + port)
    try{
        await mongoose.connect('mongodb://localhost:27017/Users')
    }
    catch(error){
        await mongoose.connect('mongodb://localhost:27017/Users')

    }
})



