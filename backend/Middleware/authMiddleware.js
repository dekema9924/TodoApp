const jwt = require('jsonwebtoken');
require('dotenv').config()


const VerifyToken=(req,res,next)=>{
    const token = req.header('Authorization');
    if(!token) return res.status(401).json({ error: 'Access denied' });
    try{
        const decoded = jwt.verify(token, process.env.PrivateKey);
        req.userId = decoded.id
        next()
 
    }catch(error){
        res.status(401).json({ error: 'Invalid token' });
    }

}

module.exports = VerifyToken