const Userdb = require('../../config/Userconfig')
const bcrypt = require('bcrypt');


const Register = async (req, res) => {
    let {password,email,username }= req.body.InputValues
   
    let Emailexist = await Userdb.findOne({ email: req.body.email || req.body.InputValues.email  })
    if(Emailexist) return res.status(400).json({error: 'Email already exist'})
        bcrypt.hash(password, 10, async function (err, hash) {
            let newUser = await Userdb.create({email, password:hash, username })
            await newUser.save();
            if(newUser) return res.status(200).json({message: 'account created'})
                res.status(400).json({error: 'account not created'})
            if(err){
                console.log(err)
            }
        });
}

module.exports = Register