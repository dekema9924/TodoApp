
const express = require('express')
const router = express.Router()
const Register = require('../../Controllers/SignUpControllers/Register')
const Login = require('../../Controllers/SignUpControllers/Login')


router.use(express.urlencoded({extended: true}))
router.use(express.json())


router.get('/', (req, res)=>{
    res.send('hey from router')
})

//register user
router.post('/register', Register)

//Login
router.post('/', Login )


module.exports = router