import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation} from 'react-router-dom'
import { profile, saveRes, updatelist } from '../redux/actions'

function UserAcompte(props) {

    const dispatch = useDispatch()
    const {loading, user,autho } = useSelector(state=>state)
    const location = useLocation();
    const eltp = location.state;
   

    useEffect(() => {

        dispatch(profile(user))
        
      }, [])

      const logout= (e) => {
        localStorage.removeItem("token")}
     
    const handleReserSave=(e)=>{
          const newRes={
            reservationPlace:`${eltp.location}`,
            reservationTime:`${eltp.fly}`,
            // places:Number
                  }
            dispatch(saveRes(newRes,user._id))
              }
       


  return (
      <div> 
      
        {loading? <h2> loading ...</h2>:
        !autho ? <Navigate to="/User/SignIn" />
        :
     <div>
     <h2> Summary of Reservation </h2>
     <br />
     <h3> {user.name}</h3> 
     <h3> Reserved Location </h3>
     <h3> {eltp.location}</h3> 
     <h3> Reserved Flight  </h3>
     <h3> {eltp.fly}</h3> 
     <h3> Places needed   </h3>
     {/* <h3> {places}  </h3> */}
    
     <div>
     
     {/* <input type="Number"  placeholder='Enter the number of persons ' value={reserved_places} onChange={(e)=>setReserved_places(e.target.value)}/> */}
     <button id="bb" onClick={handleReserSave}> Confirm </button>
     </div>
     <br />
     <Link to="/User/SignIn" onClick={logout} >LOG OUT</Link>
     {/* <button type="button" class="btn btn-link"  onClick={logout}> LOG OUT </button> */}
   
    </div>
    }
    </div>
  )
}

export default UserAcompte