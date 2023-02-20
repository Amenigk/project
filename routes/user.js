const express= require("express")
const router =express.Router() // express methods for router creation
const {register, login, getProfile, saveRes} = require('../controllers/user.controller')
const { registerRules,validator} = require("../middlewares/validator")
const {authorisation} =require("../middlewares/authorisation")



 router.post('/register',registerRules(),validator,register)
 router.post('/login', login)
 router.get('/profile',authorisation,getProfile)
 router.put ('/saveRes/:x',authorisation,saveRes)


 module.exports = router
 