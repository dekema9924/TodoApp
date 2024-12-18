const Userdb = require('../../config/Userconfig')


const todoDashboard =async (req, res)=>{
    const findUser =  await Userdb.findById(req.userId).select(['-password'])
    console.log(findUser)
    if(!findUser) return res.status(400).json({error: 'Invalid User'})
        res.status(200).json({data: findUser})
}



module.exports = todoDashboard