import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,Navigate,useParams } from 'react-router-dom'
import { profile, updatelist } from '../redux/actions'

function Booking(props) {
    const params= useParams()
    const dispatch = useDispatch() 
    const {loading,list,errors,user} = useSelector(state=>state) 
    const [reserved_places, setReserved_places] = useState('0')
    
    useEffect(() => {

      dispatch(profile(user))
      
    }, [])
    
    const elt=list?.find(x=> x._id==params._id)

  //  const value0= document.getElementById("userplaces").value();
  //  console.log(value0)

    

    const handleReservation=(e)=>{
      const newResPlaces={
         reserved_places
              }
        dispatch(updatelist(newResPlaces,elt._id))
          }
   
  return (
    <div >
    {loading? <h3> loading...</h3>:
    <div className='div_booking'>
    {/* <div className='div_booking' style={{backgroundImage:`url(${elt.image})` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}> */}
    { elt.free_places=== 0 &&  <h4> No free places for this flight </h4>}
    
     <table className='div_tab' >
  <tr >
    <th> Where to Fly </th>
    <th> When to Fly </th>
    <th> Free Places</th>
    <th> Price</th>
  </tr>
  <tr>
    <td>{elt.location}  </td>
    <td> {elt.fly}</td>
    <td> {elt.free_places}</td>
    <td style={{color:'orange'}}> 250DT </td>
  </tr>
   </table>
   <br />
   <div>
   <h3> Description  </h3>
   <p> {elt.description}  
   <br/> You need to be on time to live the experience.   
   </p>
   <h3> Flight Duration   </h3>
   <p> 45mn </p>
   </div>
     <div className='div_res'>
     <h3> Get a place  </h3>
     <input type="number" id="userplaces"   value={reserved_places} onChange={(e)=>setReserved_places(e.target.value)}/>
     
      
      {localStorage.getItem("token")? 
     <Link  to={`/UserAcompte/:${user?.name}`}  state={elt}   onClick={handleReservation}  > 
     Reserve  </Link>:
     <h4> You need to be login </h4>   
     }
     

   </div>
   </div>
  } 
  
  </div> 
  )
}

export default Booking