import React from 'react'
import image1 from './assets/image-product-1.jpg';
import image2 from './assets/image-product-2.jpg';
import image3 from './assets/image-product-3.jpg';
import image4 from './assets/image-product-4.jpg';
import { useState} from "react";
import { Link } from 'react-router-dom';

function ShoesOneView() {

const imageArray = [image1,image2,image3,image4];
 const [index,setIndex] = useState(0);
 

function nextImage() {
  if (index < imageArray.length - 1) {
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
          <Link to='/shoesone' className='link-no-effects'>
            <div className="border-effect-view">
              <img src={imageArray[index]} alt="shoes main" className="main-image-view"/>
            </div>
          </Link>
            <div className="next-cont">
                <button className="next" onClick={nextImage}></button>
            </div>
            <div className="prev-cont"> 
                <button className="previous"  onClick={prevImage}></button>
            </div>
        </div>

        <div className="small-images-view">
          <img src={image1} alt="mini-boots-image1" className="small-img" tabIndex={0} onClick={()=>setIndex(0)}/>
          <img src={image2} alt="mini-boots-image2" className="small-img" tabIndex={0} onClick={()=>setIndex(1)}/>
          <img src={image3} alt="mini-boots-image3" className="small-img" tabIndex={0} onClick={()=>setIndex(2)}/>
          <img src={image4} alt="mini-boots-image4" className="small-img" tabIndex={0} onClick={()=>setIndex(3)}/>
        </div>

      </div>
    </main>
  )
}

export default ShoesOneView