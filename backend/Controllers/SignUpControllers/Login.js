const Userdb = require('../../config/Userconfig')
const bcrypt = require('bcrypt');


const Login= async(req,res)=>{
    const {email, password} = req.body

    const Emailvalid = await Userdb.findOne({email})
    if(!Emailvalid) return res.status(400).json({error: "Invalid email"})
        const match = bcrypt.compareSync(password, Emailvalid.password);
    if(!match) return res.status(400).json({error: "Invalid password"})
        return res.status(400).json({message: "Login Success"})

}

module.exports = Login