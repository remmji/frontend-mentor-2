import React from 'react'
import by1 from './assets/byfar1.png';
import by2 from './assets/byfar2.png';
import by3 from './assets/byfar3.png';
import by4 from './assets/byfar4.png';
import { useState} from "react";
import { Link } from 'react-router-dom';

function ByFarView() {

    const imageArrayByFar = [by1,by2,by3,by4];
    const [index,setIndex] = useState(0);
   
function nextImage() {
  if (index < imageArrayByFar.length - 1) {
    setIndex(index + 1);
  }
}

function prevImage() {
  if (index > 0) {
    setIndex(index - 1);
  }
}

  return (

   <main className="main-content-view">
     <div className="left-grid">

        <div className="main-image-container">

          <Link to='/byfar' className='link-no-effects'><div className="border-effect-view"><img src={imageArrayByFar[index]} alt="shoes main" className="main-image-view" /></div></Link>
         
          <div className="next-cont">
              <button className="next" onClick={nextImage}></button>
          </div>

          <div className="prev-cont"> 
              <button className="previous"  onClick={prevImage}></button>
          </div>

        </div>

        <div className="small-images-view">
          <img src={by1} alt="mini-boots-image1" className="small-img" onClick={()=>setIndex(0)}/>
          <img src={by2}alt="mini-boots-image2" className="small-img"  onClick={()=>setIndex(1)}/>
          <img src={by3} alt="mini-boots-image3" className="small-img"  onClick={()=>setIndex(2)}/>
          <img src={by4} alt="mini-boots-image4" className="small-img"  onClick={()=>setIndex(3)}/>
        </div>

      </div>
   </main>
  )
}

export default ByFarView