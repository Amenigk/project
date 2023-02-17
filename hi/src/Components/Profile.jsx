import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { profile, updatelist } from '../redux/actions'

const Profile = () => {
    
    const dispatch = useDispatch()
    const {loading, user, autho} = useSelector(state=>state)
    const [reserved_places, setReserved_places] = useState()


    useEffect(() => {

      dispatch(profile())
      
    }, [])

  //   const handleReservation=(e)=>{
  //     const newResPlaces={
  //        reserved_places
  //             }
  //       dispatch(updatelist(newResPlaces,elt._id))
           

  // }
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
     <h3> {user.name}</h3>   
     <h3> booked fly </h3>
     <div>
     <h3> Places needed   </h3>
     {/* <input type="Number"  placeholder='Enter the number of persons ' value={reserved_places} onChange={(e)=>setReserved_places(e.target.value)}/> */}
     </div>
     


     <Link to="/User/SignIn" onClick={logout} >LOG OUT</Link>
     {/* <button type="button" class="btn btn-link"  onClick={logout}> LOG OUT </button> */}
   
    </div>
    }
    </div>
  )
}

export default Profile