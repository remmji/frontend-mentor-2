import React from 'react'
import vans1 from './assets/vans.jpg';
import vans2 from './assets/vans2.png';
import vans3 from './assets/vans3.png';
import vans4 from './assets/vans4.png';
import plus from './assets/icon-plus.svg';
import minus from './assets/icon-minus.svg';
import { useState} from "react";
import Navbar from './Navbar';
import AnimatedPage from './AnimatedPage';
import { motion } from 'framer-motion';

function Vans({counter, setCounter, dataZero, dataAdd, setDataAdd, setDataZero, counterVans,setCounterVans, dataAddVans, setDataAddVans,
                         dataAddByFar,setDataAddByFar,setCounterByFar, counterByFar, dataAddNike, setDataAddNike, counterNike, setCounterNike, handleClickVans}) {

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
    // <>
    <AnimatedPage>
   <Navbar counter={counter} setCounter={setCounter} dataZero={dataZero} dataAdd={dataAdd} setDataAdd={setDataAdd} setDataZero={setDataZero} counterVans={counterVans} setCounterVans={setCounterVans} dataAddVans={dataAddVans} setDataAddVans={setDataAddVans} dataAddByFar={dataAddByFar} setDataAddByFar={setDataAddByFar} setCounterByFar={setCounterByFar} counterByFar={counterByFar} dataAddNike={dataAddNike} setDataAddNike={setDataAddNike} counterNike={counterNike} setCounterNike={setCounterNike}>
    </Navbar>
   
     <main className="main-content">
    <div className="left-grid">

        <div className="main-image-container">
         <div className="border-effect"><img src={imageArrayVans[index]} alt="shoes main" className="main-image" onClick={()=>setClose('')}/></div>
         
          <div className="next-cont">
              <button className="next" onClick={nextImage}></button>
          </div>
          <div className="prev-cont"> 
              <button className="previous"  onClick={prevImage}></button>
          </div>
          
        </div>

        <div className="small-images">
          <img src={vans1} alt="mini-boots-image1" className="small-img" tabIndex={0} onClick={()=>setIndex(0)}/>
          <img src={vans2}alt="mini-boots-image2" className="small-img"  tabIndex={0} onClick={()=>setIndex(1)}/>
          <img src={vans3} alt="mini-boots-image3" className="small-img" tabIndex={0} onClick={()=>setIndex(2)}/>
          <img src={vans4} alt="mini-boots-image4" className="small-img" tabIndex={0} onClick={()=>setIndex(3)}/>
        </div>

      </div>
{/*end left  */}

{/* rigth */}

      <div className="right-grid">
        <div className="flex-container">
        <motion.div className="text-container"
        initial={{y:-500}}
        animate={{y:0}}
        transition={{delay:0.2,duration:0.2}}>
          <h3 className="orange-text">SNEAKER COMPANY</h3>
          <h1 className="product-header">VANS UA OLD SKOOL</h1>
          <p className="product-description">The Old Skool, the Vans classic skate shoe and first to bare the iconic sidestripe, is a low top lace-up featuring sturdy canvas and suede uppers, re-enforced toecaps to withstand repeated wear, padded collars for support and flexibility, and signature rubber waffle outsoles..</p>
        </motion.div>

        <motion.div className="price-container"
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{delay:0.4,duration:0.5}}>
          <p className="price">$90.00</p><span className="orange-reduction">50%</span>
          <p className="grey-reduction"><s>$180</s></p>
        </motion.div>
        

        <motion.div className="functionality-container"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.6,duration:0.7}}>
          <motion.div className="small-btns" 
          whileHover={{scale:1.1}}>
            <button className="minus-btn"><img src={minus} alt="minus" onClick={()=>{counterVans===0? setCounterVans(0): setCounterVans(counterVans-1)}} /></button>
            <span className="number">{counterVans}</span>
            <button className="plus-btn"><img src={plus} alt="plus" onClick={()=>setCounterVans(counterVans+1)}/></button>
          </motion.div>
          <div>
            <button className="add-cart-btn glow-effect" onClick={handleClickVans}>
              Add to cart
              <svg className='glow-container'>
                <rect pathLength={100} className='glow-blur'strokeLinecap='round'></rect>
                <rect pathLength={100} className='glow-line' strokeLinecap='round'></rect>
              </svg>
            </button>
          </div>
        </motion.div>
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
    {/* </> */}
    </AnimatedPage>
  )
}

export default Vans