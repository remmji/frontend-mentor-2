import React from 'react'
import nike1 from './assets/nike1.png';
import nike2 from './assets/nike2.png';
import nike3 from './assets/nike3.png';
import nike4 from './assets/nike4.png';
import { Link } from 'react-router-dom';
import { useState} from "react";

function NikeView() {

 const imageArrayNike = [nike1,nike2,nike3,nike4];
 const [index,setIndex] = useState(0);
 

 function nextImage() {
  if (index < imageArrayNike.length - 1) {
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
          <Link to='/nike' className='link-no-effects'><div className="border-effect-view"><img src={imageArrayNike[index]} alt="shoes main" className="main-image-view" /></div></Link>
         
          <div className="next-cont">
              <button className="next" onClick={nextImage}></button>
          </div>
          <div className="prev-cont"> 
              <button className="previous"  onClick={prevImage}></button>
          </div>
          
        </div>

        <div className="small-images-view">
          <img src={nike1} alt="mini-boots-image1" className="small-img" tabIndex={0} onClick={()=>setIndex(0)}/>
          <img src={nike2}alt="mini-boots-image2" className="small-img"  tabIndex={0} onClick={()=>setIndex(1)}/>
          <img src={nike3} alt="mini-boots-image3" className="small-img" tabIndex={0} onClick={()=>setIndex(2)}/>
          <img src={nike4} alt="mini-boots-image4" className="small-img" tabIndex={0} onClick={()=>setIndex(3)}/>
        </div>

      </div>
     </main>
  )
}

export default NikeView