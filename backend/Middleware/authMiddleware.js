const jwt = require('jsonwebtoken');
require('dotenv').config()


const VerifyToken=(req,res,next)=>{
    const authheader = req.header('Authorization'||" authorization");
    if(!authheader) return res.status(401).json({ error: 'Access denied' });
  
        const token = authheader.split(" ")[1]
        if(!token) return res.status(401).json({ message: 'Token is missing' });
            jwt.verify(token, process.env.PrivateKey, (err, decoded) => {
                if (err) {
                    return res.status(403).json({ message: 'Invalid or expired token' });
                }
                req.userId = decoded.id; // You can now access `req.user` in the route handlers
                next();
            });
 
    
}

module.exports = VerifyToken