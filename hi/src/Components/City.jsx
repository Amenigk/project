import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
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

        {list?.map((elt)=> 
                 <div className='flylist'>
                 <h2> {elt.fly} </h2> 
                  <h2>    {elt.free_places}         </h2>           
                  </div>                                  )}
        {/* <p>  {list?.map((elt)=> <h2> {elt.free_places} </h2>  )}  </p> */}


      </div>}
       
    </div>
  )
}

export default City