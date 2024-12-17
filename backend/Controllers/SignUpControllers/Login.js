const Userdb = require('../../config/Userconfig')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()




const Login= async(req,res)=>{
    const {email, password} = req.body

    const Emailvalid = await Userdb.findOne({email})
    if(!Emailvalid) return res.status(400).json({error: "Invalid email"})
        const match = bcrypt.compareSync(password, Emailvalid.password);
    if(!match) return res.status(400).json({error: "Invalid password"})
        //create Token
        var token = jwt.sign({ id: Emailvalid._id }, process.env.PrivateKey, {expiresIn: '1h'} );
        //create a cookie....start here
        res.cookie("Token", token, {
            maxAge: 60*60*24*30*1000,
            // domain: window.location.hostname,
        }) //2hrs
        return res.status(200).json({message: "Login Success"})
}

module.exports = Login 