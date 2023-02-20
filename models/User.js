const mongoose= require("mongoose")
const Schema= mongoose.Schema


const userSchema = new Schema(
{
    name:{
        type:String,
        required:true
    },
    email:String,
    phone:Number,
    password:String,
    reservationPlace:String,
    reservationTime:String,
    places:Number
})

module.exports = mongoose.model("User",userSchema)