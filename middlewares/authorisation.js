const config = require('config')
const secret = config.get("secret") 
const jwt =require ('jsonwebtoken')
const User = require('../models/User')
 

// middleware for  verify the user is autorised or not

exports.authorisation = async(req,res,next) => {
const token = req.headers.authorization
if (!token){
    return res.status(401).json({msg: " inexisted token"})
}
try {
   const decodedUser = jwt.verify(token,secret) 
   const user = await User.findById(decodedUser.id).select('-password')

   if(!user){
    return res.status(401).json({msg:"unauthorized"})
   } else{
    next()
    res.send(user)
   }

} catch (error) {
    res.status(500).json({msg:error.message})
}
}

