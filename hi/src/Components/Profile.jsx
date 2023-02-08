import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { profile } from '../redux/actions'

const Profile = () => {
    
    const dispatch = useDispatch()
    const {loading, user, autho} = useSelector(state=>state)
    const [reservedPlaces, setReservedPlaces] = useState("")


    useEffect(() => {

      dispatch(profile())
      
    }, [])
    
    const logout= (e) => {
       
        localStorage.removeItem("token")}

    return (
      <div> 
      
        {loading? <h2> loading ...</h2>:
        !autho ? <Navigate to="/User/SignIn" />
        :
     <div>
     <h2>  your profile </h2>
     <br />
     <h3> {user.name}</h3>    // nav bar
     <h3> booked fly </h3>
     <div>
     <h3> Places needed   </h3>
     <input type="Number"  placeholder='Enter the number of persons ' value={reservedPlaces} onChange={(e)=>setReservedPlaces(e.target.value)}/>
     </div>
     


     <Link to="/User/SignIn" onClick={logout} >LOG OUT</Link>
     {/* <button type="button" class="btn btn-link"  onClick={logout}> LOG OUT </button> */}
   
    </div>
    }
    </div>
  )
}

export default Profile