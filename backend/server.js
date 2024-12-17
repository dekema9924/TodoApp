const port = 3000
const express = require('express')
const app = express()
const router = require('./Routes/RegisterRoute/Registerroutes.js')
const mongoose = require('mongoose');
const cors = require('cors')




//middlewares
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' //cors err if not added

}))
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



