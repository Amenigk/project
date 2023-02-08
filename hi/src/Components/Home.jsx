import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate} from 'react-router-dom'
import { getList } from '../redux/actions'
import City from './City'
import './styleSheet.css'

const Home = () => {
    

  const [location, setLocation] = useState("")
  const dispatch = useDispatch() 
  // const {loading,list} = useSelector(state=>state) 
  const handleClick=(x)=>{
      const newLocation ={
        location: x 
      }
    dispatch(getList(newLocation))
  }


  return (
      


   <div className="img">

   <div className="imgbox" >
    <img src='https://www.planetware.com/wpimages/2020/09/tunisia-tozeur-top-attractions-oases-tamerza-chebika-mides.jpg'  alt='tozeur'/> 
    <button id='bb' > <Link to="/City/Tozeur" >  Tozeur </Link> </button>
    </div> 
    <div className="imgbox" >
    <img src='https://i0.wp.com/lapresse.tn/wp-content/uploads/2019/12/medina-sfax.jpg?fit=850%2C491&ssl=1'  alt='sfax'/> 
    <button  id='bb' > <Link to="/City/SFAX" >  SFAX </Link> </button> 
    </div>
    <div className="imgbox" >
    <img src='https://www.ou-et-quand.net/partir/images/illustration/oualler/djerba-guellala_116.jpg'  alt='djerba'/> 
    {/* <button id='bb' type="submit"  > DJERBA </button> */}
    
    <button id='bb'> <Link to="/City/Douz"  > Douz  </Link> </button>
    
    

    </div>
 
  </div>

    
  )
}

export default Home