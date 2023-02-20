import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation} from 'react-router-dom'
import { profile, updatelist } from '../redux/actions'

const Profile = () => {
    
    const dispatch = useDispatch()
    const {loading, user,autho } = useSelector(state=>state)
    

    useEffect(() => {

      dispatch(profile(user))
      
    }, [])

    // const handleReservation=(e)=>{
    //   const newResPlaces={
    //      reserved_places
    //           }
    //     dispatch(updatelist(newResPlaces,eltp._id))
    //       }

    const logout= (e) => {
        localStorage.removeItem("token")}

    return (
      <div> 
      
        {loading? <h2> loading ...</h2>:
        !autho ? <Navigate to="/User/SignIn" />
        :
     <div>
     
     <h3> {user.name}</h3>  
     <h3> {user.email}</h3>
     <h3> {user.phone}</h3>  
    
    </div>
    }
    </div>
  )
}

export default Profile