const mongoose= require("mongoose")
const Schema= mongoose.Schema


const listSchema = new Schema(
{
    location: String,
    fly:String,
    free_places:{type:Number,
                    default:6 },
    reserved_places:{type:Number,
                default:0 }
               
    })

module.exports = mongoose.model("List",listSchema)