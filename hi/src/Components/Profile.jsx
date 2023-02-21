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
 
    const logout= (e) => {
        localStorage.removeItem("token")}

    return (
      <div> 
      <br />
        {loading? <h2> loading ...</h2>:
        !autho ? <Navigate to="/User/SignIn" />
        :
      <div><h3> My Profile </h3>  
      <br /><br />
     <div  className='div_Profile'>
     <div><p> Name </p>  <p> {user.name} </p> </div>
     <div><p> Email </p>  <p> {user.email} </p> </div>
     <div> <p> Phone </p>  <p> {user.phone}</p>  </div>
    
    </div>
    </div>
    }
    <br />
     <Link to="/User/SignIn" onClick={logout} > <h5> LOG OUT </h5></Link>
    </div>
  )
}

export default Profile