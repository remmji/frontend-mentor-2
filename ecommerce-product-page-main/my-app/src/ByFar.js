import React from 'react'
import by1 from './assets/byfar1.png';
import by2 from './assets/byfar2.png';
import by3 from './assets/byfar3.png';
import by4 from './assets/byfar4.png';
import plus from './assets/icon-plus.svg';
import minus from './assets/icon-minus.svg';
import { useState} from "react";

function ByFar({handleClickByFar,counterByFar,setCounterByFar}) {

     const imageArrayByFar = [by1,by2,by3,by4];
     const [index,setIndex] = useState(0);
     const [close,setClose] = useState('close-lb');

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
     <main className="main-content">
    <div className="left-grid">

        <div className="main-image-container">
          <img src={imageArrayByFar[index]} alt="shoes main" className="main-image" onClick={()=>setClose('')}/>
         
          <div className="next-cont">
              <button className="next" onClick={nextImage}></button>
          </div>
          <div className="prev-cont"> 
              <button className="previous"  onClick={prevImage}></button>
          </div>
          
        </div>

        <div className="small-images">
          <img src={by1} alt="mini-boots-image1" className="small-img" onClick={()=>setIndex(0)}/>
          <img src={by2}alt="mini-boots-image2" className="small-img"  onClick={()=>setIndex(1)}/>
          <img src={by3} alt="mini-boots-image3" className="small-img"  onClick={()=>setIndex(2)}/>
          <img src={by4} alt="mini-boots-image4" className="small-img"  onClick={()=>setIndex(3)}/>
        </div>

      </div>
{/*end left  */}

{/* rigth */}

      <div className="right-grid">
        <div className="flex-container">
        <div className="text-container">
          <h3 className="orange-text">SNEAKER COMPANY</h3>
          <h1 className="product-header">By Far</h1>
          <p className="product-description">Ankle strap 70mm pumps from BY FAR featuring carrot orange, calf leather, buckle-fastening ankle strap, pointed toe, branded leather insole, high sculpted heel, leather sole and 70mm heel.</p>
        </div>

        <div className="price-container">
          <p className="price">$280.00</p><span className="orange-reduction">50%</span>
          <p className="grey-reduction">$560</p>
        </div>
        

        <div className="functionality-container">
          <div className="small-btns">
            <button className="minus-btn"><img src={minus} alt="minus" onClick={()=>{counterByFar===0? setCounterByFar(0): setCounterByFar(counterByFar-1)}} /></button>
            <span className="number">{counterByFar}</span>
            <button className="plus-btn"><img src={plus} alt="plus" onClick={()=>setCounterByFar(counterByFar+1)}/></button>
          </div>
          <button className="add-cart-btn" onClick={handleClickByFar}>Add to cart</button>
        </div>
        </div>
      </div>
{/* end right */}
{/* lightbox */}
       <div className={`left-grid-lightbox ${close} `}>

        <div className="main-image-container-lb">
          <img src={imageArrayByFar[index]} alt="shoes main" className="main-image-lb"/>
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
          <img src={by1} alt="mini-boots-image1" className="small-img"  onClick={()=>setIndex(0)}/>
          <img src={by2} alt="mini-boots-image2" className="small-img"  onClick={()=>setIndex(1)}/>
          <img src={by3} alt="mini-boots-image3" className="small-img"  onClick={()=>setIndex(2)}/>
          <img src={by4} alt="mini-boots-image4" className="small-img"  onClick={()=>setIndex(3)}/>
        </div>

      </div>
      </main>
  )
}

export default ByFar