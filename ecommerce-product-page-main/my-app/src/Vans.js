import React from 'react'
import vans1 from './assets/vans.jpg';
import vans2 from './assets/vans2.png';
import vans3 from './assets/vans3.png';
import vans4 from './assets/vans4.png';
import plus from './assets/icon-plus.svg';
import minus from './assets/icon-minus.svg';
import { useState} from "react";

function Vans({counterVans,setCounterVans,handleClickVans}) {

 const imageArrayVans = [vans1,vans2,vans3,vans4];
 const [index,setIndex] = useState(0);
 const [close,setClose] = useState('close-lb');

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
     <main className="main-content">
    <div className="left-grid">

        <div className="main-image-container">
          <img src={imageArrayVans[index]} alt="shoes main" className="main-image" onClick={()=>setClose('')}/>
         
          <div className="next-cont">
              <button className="next" onClick={nextImage}></button>
          </div>
          <div className="prev-cont"> 
              <button className="previous"  onClick={prevImage}></button>
          </div>
          
        </div>

        <div className="small-images">
          <img src={vans1} alt="mini-boots-image1" className="small-img" onClick={()=>setIndex(0)}/>
          <img src={vans2}alt="mini-boots-image2" className="small-img"  onClick={()=>setIndex(1)}/>
          <img src={vans3} alt="mini-boots-image3" className="small-img"  onClick={()=>setIndex(2)}/>
          <img src={vans4} alt="mini-boots-image4" className="small-img"  onClick={()=>setIndex(3)}/>
        </div>

      </div>
{/*end left  */}

{/* rigth */}

      <div className="right-grid">
        <div className="flex-container">
        <div className="text-container">
          <h3 className="orange-text">SNEAKER COMPANY</h3>
          <h1 className="product-header">VANS UA OLD SKOOL</h1>
          <p className="product-description">The Old Skool, the Vans classic skate shoe and first to bare the iconic sidestripe, is a low top lace-up featuring sturdy canvas and suede uppers, re-enforced toecaps to withstand repeated wear, padded collars for support and flexibility, and signature rubber waffle outsoles..</p>
        </div>

        <div className="price-container">
          <p className="price">$90.00</p><span className="orange-reduction">50%</span>
          <p className="grey-reduction">$180</p>
        </div>
        

        <div className="functionality-container">
          <div className="small-btns">
            <button className="minus-btn"><img src={minus} alt="minus" onClick={()=>{counterVans===0? setCounterVans(0): setCounterVans(counterVans-1)}} /></button>
            <span className="number">{counterVans}</span>
            <button className="plus-btn"><img src={plus} alt="plus" onClick={()=>setCounterVans(counterVans+1)}/></button>
          </div>
          <button className="add-cart-btn" onClick={handleClickVans}>Add to cart</button>
        </div>
        </div>
      </div>
{/* end right */}
{/* lightbox */}
       <div className={`left-grid-lightbox ${close} `}>

        <div className="main-image-container-lb">
          <img src={imageArrayVans[index]} alt="shoes main" className="main-image-lb"/>
          <button className="close-lightbox" onClick={()=>setClose('close-lb')}>x</button>
          <div className="next-cont">
              <button className="next" onClick={nextImage}>
              </button>
          </div>
          <div className="prev-cont"> 
              <button className="previous"  onClick={prevImage}>
              </button>
          </div>
          
        </div>

        <div className="small-images-lb">
          <img src={vans1} alt="mini-boots-image1" className="small-img"  onClick={()=>setIndex(0)}/>
          <img src={vans2} alt="mini-boots-image2" className="small-img"  onClick={()=>setIndex(1)}/>
          <img src={vans3} alt="mini-boots-image3" className="small-img"  onClick={()=>setIndex(2)}/>
          <img src={vans4} alt="mini-boots-image4" className="small-img"  onClick={()=>setIndex(3)}/>
        </div>

      </div>
      </main>
  )
}

export default Vans