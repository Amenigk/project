import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import City from './Components/City';
import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import Profile from './Components/Profile';
import Booking from './Components/Booking';
import { Media } from './Components/Media';
import VideoExperience from './Components/VideoExperience';



function App() {
  return (
    <div className="App">
    
    <BrowserRouter>  
     <nav className="navbar">
        <div className='nav_logo'>
        <img  id='logoimg' src='../logo2.png' alt='logo'/>  
        <Link to="#"> Balloons Rides Booking </Link> 
        </div>
        <div className="nav_button">
             <Link to="/">Home</Link>
             <Link  to="#">Deals</Link>
             <Link  to="/VideoExperience">Video Experience </Link>
             <Link  to="/Signup"> Register </Link>
             <Link  to="/User/SignIn"> Login </Link>
             <Link  to="#"> Contacts </Link>
        </div>
     </nav>
     <hr/>
        
    
   <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/City/:location" element={<City/>}/>
      <Route path="/Booking/:_id" element={<Booking />}/>
      <Route path="/VideoExperience" element={<VideoExperience/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/User/SignIn" element={<SignIn/>}/>
      <Route path="/User/Profile" element={<Profile/>}/>
      


   

   </Routes>
   </BrowserRouter>
    
   <br/><br/><br/><br/><br/><br/><br/><br/>
<div className="foot">
    Copyrignt 2023.    
    <br/>
    <br/>
    Balloons Rides Booking.com  
</div>


    </div>
  );
}

export default App;
