import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import image1 from './assets/image-product-1.jpg';
import image2 from './assets/image-product-2.jpg';
import image3 from './assets/image-product-3.jpg';
import image4 from './assets/image-product-4.jpg';
import plus from './assets/icon-plus.svg';
import minus from './assets/icon-minus.svg';
import cart from './assets/icon-cart.svg';

function App() {
  const [image,setImage] = useState(image1);
  const [counter,setCounter] = useState(0);


  return (
  <>

    <Navbar counter={counter} setCounter={setCounter}></Navbar>
    <main className="main-content">
{/* left */}
      <div className="left-grid">

        <div className="main-image-container">
          <img src={image} alt="shoes main" className="main-image"/>
        </div>

        <div className="small-images">
          <img src={image1} alt="mini-boots-image1" className="small-img" onClick={()=>setImage(image1)}/>
          <img src={image2}alt="mini-boots-image2" className="small-img"  onClick={()=>setImage(image2)}/>
          <img src={image3} alt="mini-boots-image3" className="small-img"  onClick={()=>setImage(image3)}/>
          <img src={image4} alt="mini-boots-image4" className="small-img"  onClick={()=>setImage(image4)}/>
        </div>

      </div>
{/*end left  */}

{/* rigth */}

      <div className="right-grid">
        <div className="flex-container">
        <div className="text-container">
          <h3 className="orange-text">SNEAKER COMPANY</h3>
          <h1 className="product-header">Fall Limited Edition Sneakers</h1>
          <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </div>

        <div className="price-container">
          <p className="price">$125.00</p><span className="orange-reduction">50%</span>
          <p className="grey-reduction">$250</p>
        </div>
        

        <div className="functionality-container">
          <div className="small-btns">
            <button className="minus-btn"><img src={minus} alt="minus" onClick={()=>{counter===0? setCounter(0): setCounter(counter-1)}} /></button>
            <span className="number">{counter}</span>
            <button className="plus-btn"><img src={plus} alt="plus" onClick={()=>setCounter(counter+1)}/></button>
          </div>
          <button className="add-cart-btn"><image src={cart} alt='cart'className="add-cart-icon"></image>Add to cart</button>
        </div>
        </div>
      </div>
{/* end right */}
    </main>

  </>
  )
}

export default App;
