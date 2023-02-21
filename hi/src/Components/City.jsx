import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getList } from '../redux/actions'

const City = () => {

    const params= useParams()
    const dispatch = useDispatch() 
    console.log(params)
    const [location, setLocation] = useState("")
    const {loading,list} = useSelector(state=>state) 


    useEffect(() => {
        dispatch(getList(params))
        
      }, [])
     
    
    
  return (
    <div>
      {loading? <h3> loading...</h3>:
    <div className='div_city'>
    <h1> {params.location} </h1>
    <h2> Select Your Flight  </h2>
    <br/>
  <table className='flylist'>
  <tr >
    <th>Flight time</th>
    <th>Free Places</th>
    <th> Reservation </th>
  </tr>

  {list?.map((elt)=> 
   <tr>
    <td>{elt.fly}</td>
    <td>{elt.free_places}</td>
    <td> 
    { elt.free_places>0?   <Link to={`/Booking/${elt._id}`}  >  Book Now </Link>:  <h5 > No free places for this flight </h5>}  </td>
  </tr>
  )}
  </table>
        
      </div>}
       <br/>
       <br/>
       <br/>
       <br/>

    </div>
  )
}

export default City