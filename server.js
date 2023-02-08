const express= require('express')  // import express
const connectdb = require('./config/connect')
const app=express()  //instance express
const list = require("./routes/list")
const user = require("./routes/user")
// do not forget start script in package json

connectdb()
app.use(express.json()) // middleware global to able espress to read json
 
// all routes list
app.use("/list",list)
app.use("/user",user)


const port= 5000 // port declaration 
app.listen(port,err=> err? console.log(err): console.log(`server is connected on ${port}`) )