import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import { Media } from './Media'
import './styleSheet.css'

const Home = () => {
    

  // const [location, setLocation] = useState("")
  // const dispatch = useDispatch() 
  // const {loading,list} = useSelector(state=>state) 
  // const handleClick=(x)=>{
  //     const newLocation ={
  //       location: x 
  //     }
  //   dispatch(getList(newLocation))
  // }


  return (
    <div className='home_div'>
      <br/>
      <br/> 
      <Media/> 
      <br/>
      <br/> 
    <h2>  Rides to Do</h2>


   <div className="img">
    <div className="imgbox" >
    <Link to="/City/Tozeur" >
    <img src='https://www.planetware.com/wpimages/2020/09/tunisia-tozeur-top-attractions-oases-tamerza-chebika-mides.jpg'  alt='tozeur'/> 
    <div id='bb' >   Tozeur  </div>
    </Link>
    </div> 
    

    <div className="imgbox" >
    <Link  to="/City/Hammamet" > 
    <img src='https://voyage-tunisie.info/wp-content/uploads/2019/10/Dar-Nour-La-Villa-de-prestige..jpg'  alt='hammamet'/> 
    <div  id='bb' >  Hammamet </div> 
    </Link>
    </div>

    <div className="imgbox" >
    <Link to="/City/Douz"  >
    <img src='https://4.bp.blogspot.com/-Vz1it4OBLLc/XDSLFy3QeiI/AAAAAAABMgg/M8kkTJLdZrQ-IfRbudFoMJCOSHmDJdn9gCLcBGAs/s1600/douz-tunisie.jpg'  alt='douz'/> 
    <p id='bb'>  Douz  </p>
    </Link>
    </div>

    <div className="imgbox" >
    <Link to="/City/Zaghouene"  >
    <img src='https://d3n5tkprdfxpgx.cloudfront.net/wp-content/uploads/2015/10/Zaghouan-Water-Temple.jpeg'  alt='zaghouane'/> 
    <div id='bb'>  Zaghouene  </div>
    </Link>
    </div> 

    <div className="imgbox" >
    <Link to="/City/Sousse"  >
    <img src='https://voyage-tunisie.info/wp-content/uploads/2018/02/Le-village-Takrouna.jpg'  alt='sousse'/> 
    <div id='bb'>  Sousse  </div>
    </Link>
    </div> 

    <div className="imgbox" >
    <Link to="/City/Djerba"  >
    <img src='https://voyage-tunisie.info/wp-content/uploads/2018/11/djerba.jpg'  alt='djerba'/> 
    <div id='bb'>  Djerba  </div>
    </Link>
    </div>  
   
 
  </div>

  </div>    
  )
}

export default Home