import React from "react";
import Navbar from "./Navbar";
import { useState} from "react";
import image1 from './assets/image-product-1.jpg';
import image2 from './assets/image-product-2.jpg';
import image3 from './assets/image-product-3.jpg';
import image4 from './assets/image-product-4.jpg';
import plus from './assets/icon-plus.svg';
import minus from './assets/icon-minus.svg';

function App() {
  const [counter,setCounter] = useState(0);
  const [dataZero,setDataZero] = useState('true')
  const [dataAdd,setDataAdd] = useState('false')
  const [index,setIndex] = useState(0);
  const imageArray = [image1,image2,image3,image4];
  const [close,setClose] = useState('close-lb');

   const handleClick = () => {
    if (counter!=0){
    setDataZero('false');
    setDataAdd('true');
  }
  };

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
  <>

    <Navbar counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero}></Navbar>
    <main className="main-content">
{/* left */}
      <div className="left-grid">

        <div className="main-image-container">
          <img src={imageArray[index]} alt="shoes main" className="main-image" onClick={()=>setClose('')}/>
         
          <div className="next-cont">
              <button className="next" onClick={nextImage}></button>
          </div>
          <div className="prev-cont"> 
              <button className="previous"  onClick={prevImage}></button>
          </div>
          
        </div>

        <div className="small-images">
          <img src={image1} alt="mini-boots-image1" className="small-img" onClick={()=>setIndex(0)}/>
          <img src={image2}alt="mini-boots-image2" className="small-img"  onClick={()=>setIndex(1)}/>
          <img src={image3} alt="mini-boots-image3" className="small-img"  onClick={()=>setIndex(2)}/>
          <img src={image4} alt="mini-boots-image4" className="small-img"  onClick={()=>setIndex(3)}/>
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
          <button className="add-cart-btn" onClick={handleClick}>Add to cart</button>
        </div>
        </div>
      </div>
{/* end right */}
{/* lightbox */}
       <div className={`left-grid-lightbox ${close} `}>

        <div className="main-image-container-lb">
          <img src={imageArray[index]} alt="shoes main" className="main-image-lb"/>
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
          <img src={image1} alt="mini-boots-image1" className="small-img" onClick={()=>setIndex(0)}/>
          <img src={image2}alt="mini-boots-image2" className="small-img"  onClick={()=>setIndex(1)}/>
          <img src={image3} alt="mini-boots-image3" className="small-img"  onClick={()=>setIndex(2)}/>
          <img src={image4} alt="mini-boots-image4" className="small-img"  onClick={()=>setIndex(3)}/>
        </div>

      </div>
    </main>

  </>
  )
}

export default App;
