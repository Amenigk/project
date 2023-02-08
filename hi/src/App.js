import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import City from './Components/City';
import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import Profile from './Components/Profile';
import Booking from './Components/Booking';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/City/:location" element={<City/>}/>
      <Route path="/Booking/:_id" element={<Booking />}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/User/SignIn" element={<SignIn/>}/>
      <Route path="/User/Profile" element={<Profile/>}/>
      


   

   </Routes>

     </BrowserRouter>

    </div>
  );
}

export default App;
