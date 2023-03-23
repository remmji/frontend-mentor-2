import React from 'react'
import vans1 from './assets/vans.jpg';
import vans2 from './assets/vans2.png';
import vans3 from './assets/vans3.png';
import vans4 from './assets/vans4.png';
import { useState} from "react";
import { Link } from 'react-router-dom';

function VansView() {

 const imageArrayVans = [vans1,vans2,vans3,vans4];
 const [index,setIndex] = useState(0);


 function nextImage() {
  if (index < imageArrayVans.length - 1) {
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
          <Link to='/vans' className='link-no-effects'><div className="border-effect-view"><img src={imageArrayVans[index]} alt="shoes main" className="main-image-view" /></div></Link>
         
          <div className="next-cont">
              <button className="next" onClick={nextImage}></button>
          </div>
          <div className="prev-cont"> 
              <button className="previous"  onClick={prevImage}></button>
          </div>
          
        </div>

        <div className="small-images-view">
          <img src={vans1} alt="mini-boots-image1" className="small-img" onClick={()=>setIndex(0)}/>
          <img src={vans2}alt="mini-boots-image2" className="small-img"  onClick={()=>setIndex(1)}/>
          <img src={vans3} alt="mini-boots-image3" className="small-img"  onClick={()=>setIndex(2)}/>
          <img src={vans4} alt="mini-boots-image4" className="small-img"  onClick={()=>setIndex(3)}/>
        </div>

      </div>
     </main>
  )
}

export default VansView