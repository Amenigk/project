import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation} from 'react-router-dom'
import { getReservation, profile, saveRes, updatelist } from '../redux/actions'

function UserAcompte(props) {

    const dispatch = useDispatch()
    const {loading, user,autho } = useSelector(state=>state)
    const location = useLocation();
    const eltp = location.state;
   

    useEffect(() => {

      dispatch(getReservation(user))
        
      }, [])

      const logout= (e) => {
        localStorage.removeItem("token")}
     
  return (
      <div> 
      
        {loading? <h2> loading ...</h2>:
        !autho ? <Navigate to="/User/SignIn" />
        :
     <div>
     <h3> Hello  {user.name} </h3> 
     <br />
     <h2> Summary of Reservation </h2>
     <br /><br /><br />
     <div className='div_confirm'>
     <div><h3> Destination </h3>  <h3> {eltp.location}</h3>  </div>
     
     <div><h3> Reserved Flight  </h3>   <h3> {eltp.fly}</h3> </div>
     
     <div> <h3> Places needed </h3>      <h3> {user.places}  </h3> </div>
     </div>
     
     <div>
     
     <br />
     <Link to="#"  >Get Your Ticket</Link>

     <br />
     <Link to="/User/SignIn" onClick={logout} >LOG OUT</Link>
     </div>
     </div>
    
    }
    </div>
  )
}

export default UserAcompte