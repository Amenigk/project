const express =require("express")
const { check, validationResult } = require("express-validator")

//generate error msg 

exports.registerRules= () => [
check("name","name field is required").notEmpty(), 
check("email","a valid email please").isEmail() ,
check("password","password at least 6 characters").isLength({min:6}) 
]

// middleware validator

exports.validator = (req,res,next) =>{
    const errors = validationResult(req)
    errors.isEmpty()? next() :res.status(400).json({msg:errors.array().map(el=>el.msg)})
}
