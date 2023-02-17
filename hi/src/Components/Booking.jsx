import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,Navigate,useParams } from 'react-router-dom'
import { updatelist } from '../redux/actions'

function Booking() {
    const params= useParams()
    const dispatch = useDispatch() 
 
    const {loading,list,errors} = useSelector(state=>state) 
    const [reserved_places, setReserved_places] = useState('0')
    const elt=list.find(x=> x._id==params._id)
    


  return (
    <div >
    {loading? <h3> loading...</h3>:
    <div className='div_booking' style={{backgroundImage:`url(${elt.image})` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
     <br/>
     { elt.free_places=== 0 &&  <h4> No free places for this flight </h4>}
     <br/>
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
   <p> {elt.description}  </p>
   </div>
     <div className='div_res'>
     <h3> Get a place  </h3>
     {/* <input type="number"  placeholder='Enter the number of persons ' value={reserved_places} onChange={(e)=>setReserved_places(e.target.value)}/> */}
     <button id='bb' >   Reserve  </button>
     {localStorage.getItem("token")? <Link to='/User/Profile' />:<h4> you need to be login </h4>}
   </div>
   </div>
  } 
  
  </div> 
  )
}

export default Booking