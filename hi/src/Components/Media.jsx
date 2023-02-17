import React from 'react'
import './styleSheet.css'
import SimpleImageSlider from "react-simple-image-slider";


export const Media = () => {
  
  const images = [
    { url: "../img1.jpg" },
    { url: "../IMG8.jpg" },
    { url: "../IMG6.jpg" },
    { url: "../IMG5.jpg" },
    { url: "../IMG7.jpg" },
    { url: "../IMG4.jpg" },
    { url: "../IMG3.jpg"}
        
  ];



  return (
    <div className='media_div'>
    <h1> Discover Tunisia From The TOP </h1>
   <SimpleImageSlider
        width={1349}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        
      />


 
</div>
   
  )
}
