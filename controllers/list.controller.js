const List = require("../models/List")



// Admin Functions

exports.save = async(req,res)=>{
    const {location,fly}= req.body
    try {
        const   newList = new List({
            location,
            fly,
                     }) 
       await   newList.save()
       res.send(newList)
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.deleteFly = async(req,res)=>{
    
    try {
   
       const fly = await List.findByIdAndDelete(req.params.x)
       res.send(fly)
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.updatelistadmin = async(req,res) => {

    try {
      
        const  updatedList= await List.findByIdAndUpdate(req.params.x,req.body,{new: true})
        res.send(updatedList)  

    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}



//   User Functions
exports.getList = async(req,res)=>{
    const {location}= req.body
    try {
        const flylist= await List.find({location})
        
        //  res.send(flylist)
        res.send(flylist.map(el=>{
            let info={}
            info.location=el.location;
            info._id=el._id;
            info.fly=el.fly;
            info.free_places=el.free_places
        return info
        }))  
       
       } catch (error) {
        res.status(500).json({msg:error.message})
    }
}



// update that occurs when users try to book a specific timeslot
exports.updatelist = async(req,res) => {

    const {free_places,reserved_places} = req.body
    // const newValue = free_places-reserved_places

    try {
        const list = await List.findById(req.params.x)
        if(list.free_places===0){
            return res.status(400).json({msg:"time slot fully booked" })

        }
        if (reserved_places>list.free_places){
            return res.status(400).json({msg:"not enough free places" })
        }
       
        console.log(list) 
        const  updatedList= await List.findByIdAndUpdate(req.params.x,{reserved_places:list.reserved_places+reserved_places,free_places:list.free_places-reserved_places},{new: true})

        res.send(updatedList)  

    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}

