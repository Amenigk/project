const mongoose= require("mongoose")
const config= require("config")
const db = config.get("db")
const connectdb=async()=> {
    try {
        await mongoose.connect(db)  
        console.log('database final project connected')
    } catch (error) {
        console.log(error)
    }
}

//don't forget to export connect function
module.exports = connectdb