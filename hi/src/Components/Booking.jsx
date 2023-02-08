import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updatelist } from '../redux/actions'

function Booking() {
    const params= useParams()
    const dispatch = useDispatch() 
 
    const {loading,list} = useSelector(state=>state) 
    const [reserved_places, setReserved_places] = useState(0)
    const elt=list.find(x=> x._id==params._id)
    const handleReservation=(e)=>{
        const newResPlaces={
           reserved_places
                }
        dispatch(updatelist(newResPlaces,elt._id))

    }


  return (
    <div>
  
     <h3> {elt.location}   </h3>
     <h3> {elt.fly}  </h3>
     <h3> {elt.free_places}   </h3>
     <div>
     <h3> Places needed   </h3>
     <input type="number"  placeholder='Enter the number of persons ' value={reserved_places} onChange={(e)=>setReserved_places(e.target.value)}/>
     </div>
     <button id='bb' onClick={handleReservation}  >  Reserve Places  </button>
    </div>
  )
}

export default Booking