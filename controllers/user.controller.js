const User = require("../models/User")
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config= require("config")
const secret = config.get("secret")

exports.register = async(req,res)=>{
    const {name,email,phone,password}= req.body

    try {
      const existedUser= await User.findOne({email})
      if(existedUser){ 
        return res.status(400).json({msg:"existing User"})
    }

      const   newUser = new User({
        name,
        email,
        phone,
        password
        })
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newUser.password, salt);
        newUser.password = hash
        await newUser.save();
        res.send({
          name,email,phone
        }
          )
       
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.login = async(req,res) =>{
  const {email,password} =req.body
  try {
    const userAutho= await User.findOne({email})
      if(!userAutho){ 
        return res.status(400).json({msg:"Email or password invalid"})   // test email 
      }
    const   isMatched=  await bcrypt.compare(password,userAutho.password)
    if(!isMatched){ 
      return res.status(400).json({msg:"Email or password invalid"})  // test password
    }
// generate token : install module third party     npm install jsonwebtoken

    const payload ={
      id: userAutho._id
    }

     const token = await jwt.sign(payload, secret);
   
    res.send({
      token,
      userAutho:{       // send only the data to use in front 
        id:userAutho._id,
        name:userAutho.name,
        email:userAutho.email,
        phone:userAutho.phone
      }
    
    })
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
}

exports.getProfile = (req,res) =>{
  res.send(req.user)
}

exports.saveRes = async(req,res) => {

  const {reservationPlace,reservationTime,places} = req.body
  

  try {
      const user = await User.findById(req.params.x)
          
      console.log(user) 
      const  savedRes= await User.findByIdAndUpdate(req.params.x,req.body,{new: true})

      res.send(savedRes)  

  } catch (error) {
      res.status(500).json({msg:error.message})
  }

}

exports.getReservation = (req,res) =>{
  res.send(req.user)
}