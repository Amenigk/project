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
  <div>
  <h1> List Of Available Flys and Dates </h1>
   
  <table className='flylist'>
  <tr >
    <th>Fly time</th>
    <th>Free Places</th>
    <th>Booking</th>
  </tr>
  {list?.map((elt)=> 
  <tr>
    <td>{elt.fly}</td>
    <td>{elt.free_places}</td>
    <td> <Link to={`/Booking/${elt._id}`}  >  Booking </Link> </td>
  </tr>
  )}
  </table>
        
      </div>}
       
    </div>
  )
}

export default City