
const express = require('express')
const router = express.Router()
const Register = require('../../Controllers/SignUpControllers/Register')


router.use(express.urlencoded({extended: true}))
router.use(express.json())

router.get('/', (req, res)=>{
    res.send('hey from router')
})

//register user
router.post('/register', Register)

module.exports = router