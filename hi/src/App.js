import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Components/Home';
import City from './Components/City';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/City/:location" element={<City/>}/>

      
      {/* <Route path="/Profile" element={<Profile/>}/> */}

   

   </Routes>

     </BrowserRouter>

    </div>
  );
}

export default App;
