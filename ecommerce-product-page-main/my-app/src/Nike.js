import React from 'react'
import nike1 from './assets/nike1.png';
import nike2 from './assets/nike2.png';
import nike3 from './assets/nike3.png';
import nike4 from './assets/nike4.png';
import plus from './assets/icon-plus.svg';
import minus from './assets/icon-minus.svg';
import { useState} from "react";

function Nike({counterNike,setCounterNike,handleClickNike}) {

 const imageArrayNike = [nike1,nike2,nike3,nike4];
 const [index,setIndex] = useState(0);
 const [close,setClose] = useState('close-lb');

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
    
     <main className="main-content">
    <div className="left-grid">

        <div className="main-image-container">
          <img src={imageArrayNike[index]} alt="shoes main" className="main-image" onClick={()=>setClose('')}/>
         
          <div className="next-cont">
              <button className="next" onClick={nextImage}></button>
          </div>
          <div className="prev-cont"> 
              <button className="previous"  onClick={prevImage}></button>
          </div>
          
        </div>

        <div className="small-images">
          <img src={nike1} alt="mini-boots-image1" className="small-img" onClick={()=>setIndex(0)}/>
          <img src={nike2}alt="mini-boots-image2" className="small-img"  onClick={()=>setIndex(1)}/>
          <img src={nike3} alt="mini-boots-image3" className="small-img"  onClick={()=>setIndex(2)}/>
          <img src={nike4} alt="mini-boots-image4" className="small-img"  onClick={()=>setIndex(3)}/>
        </div>

      </div>
{/*end left  */}

{/* rigth */}

      <div className="right-grid">
        <div className="flex-container">
        <div className="text-container">
          <h3 className="orange-text">SNEAKER COMPANY</h3>
          <h1 className="product-header">NIKE AIR FORCE 1 FONTANKA WOMEN'S </h1>
          <p className="product-description">What colors! The design of the new Air Force 1 Fontanka sneakers that allows you to perform better than your morning coffee. Think about how you are going to look in your outfits!</p>
        </div>

        <div className="price-container">
          <p className="price">$120.00</p><span className="orange-reduction">50%</span>
          <p className="grey-reduction">$240</p>
        </div>
        

        <div className="functionality-container">
          <div className="small-btns">
            <button className="minus-btn"><img src={minus} alt="minus" onClick={()=>{counterNike===0? setCounterNike(0): setCounterNike(counterNike-1)}} /></button>
            <span className="number">{counterNike}</span>
            <button className="plus-btn"><img src={plus} alt="plus" onClick={()=>setCounterNike(counterNike+1)}/></button>
          </div>
          <button className="add-cart-btn" onClick={handleClickNike}>Add to cart</button>
        </div>
        </div>
      </div>
{/* end right */}
{/* lightbox */}
       <div className={`left-grid-lightbox ${close} `}>

        <div className="main-image-container-lb">
          <img src={imageArrayNike[index]} alt="shoes main" className="main-image-lb"/>
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
          <img src={nike1} alt="mini-boots-image1" className="small-img"  onClick={()=>setIndex(0)}/>
          <img src={nike2} alt="mini-boots-image2" className="small-img"  onClick={()=>setIndex(1)}/>
          <img src={nike3} alt="mini-boots-image3" className="small-img"  onClick={()=>setIndex(2)}/>
          <img src={nike4} alt="mini-boots-image4" className="small-img"  onClick={()=>setIndex(3)}/>
        </div>

      </div>
      </main>
  )
}

export default Nike