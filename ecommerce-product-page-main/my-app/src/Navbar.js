import React from 'react';
import { useState } from 'react';
import logo from './assets/logo.svg';
import avatar from './assets/image-avatar.png';
import cart from './assets/icon-cart.svg';
import remove from './assets/icon-delete.svg';
import image1 from './assets/image-product-1.jpg';
import vans1 from './assets/vans.jpg';
import by1 from './assets/byfar1.png';
import nike1 from './assets/nike1.png';
import { Link } from "react-router-dom";

function Navbar({counter,setCounter,dataZero,dataAdd,setDataAdd,setDataZero,counterVans,setCounterVans,dataAddVans,setDataAddVans,dataAddByFar,setDataAddByFar,counterByFar,setCounterByFar,dataAddNike,setDataAddNike,counterNike,setCounterNike}) {

 const [isMobileOpen,setIsMobileOpen] = useState('false');
 const[active,setActive] = useState(true);

    function toggleActive(){
        setActive(!active);
    }

    function toggleMobileOpen () {
        setIsMobileOpen(!isMobileOpen);
    }

    
    const handleClickRemove = () => {
    setDataAdd(false);
    setCounter(0);
    if(counterVans===0 && counterByFar===0 && counterNike===0){
    setDataZero(true);
    }
  };
    const handleClickRemoveVans = () => {
    setDataAddVans(false);
    setCounterVans(0);
    if(counter===0 && counterByFar===0 && counterNike===0){
    setDataZero(true);
    }
  };
   const handleClickRemoveByFar = () => {
    setDataAddByFar(false);
    setCounterByFar(0);
    if(counter===0 && counterVans===0 && counterNike===0){
    setDataZero(true);
    }
  };
   const handleClickRemoveNike = () => {
    setDataAddNike(false);
    setCounterNike(0);
    if(counter===0 && counterByFar===0 && counterVans===0){
    setDataZero(true);
    }
  };

  return (
  <header className="header">

    <nav className="navbar">

        <button className='mobile-hamburger' aria-expanded={isMobileOpen}
                onClick={toggleMobileOpen}>
        </button>

        <div>
            <img src={logo} alt="logo" className='logo'/>
        </div>
        
        <div className="container">

            <ul className="main-navigation-list" data-visible={isMobileOpen}>
                <li><Link to="/">Collections</Link></li>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
            </ul>

            <div className="cart-avatar-container">
                <button className='cart-btn'><img src={cart} alt="cart" className='cart' onClick={toggleActive}/></button>
                <span className='counter-cart' data-visiblee={dataAdd || dataAddVans || dataAddNike || dataAddByFar}>{counter+counterVans+counterNike+counterByFar}</span>
                <img src={avatar} alt="avatar" className='avatar' />
                <div className={`checkout-center ${active ? 'active' : ''}`}>
                  
                   
                    <p className="checkout-para-top">Cart</p>
                    <p className="checkout-para-bot"  data-zero={dataZero}>Your cart is empty</p>

                    
                    <div className="rdy-checkout"  data-add={dataAdd}>

                        <img src={image1} alt="boots" className='mini-checkout-image'/>

                        <div className="summary-container">
                            <p className="product-name-para">Fall Limited Edition Sneakers</p>
                            <p className="summary">$125 x <span className='counter'>{counter} </span><span className="result">${counter*125}</span></p>
                        </div>

                        <img src={remove} alt="delete" className='remove' onClick={handleClickRemove}/>
                    </div>

                    <div className="rdy-checkout"  data-add-vans={dataAddVans}>

                        <img src={vans1} alt="boots" className='mini-checkout-image'/>

                        <div className="summary-container">
                            <p className="product-name-para">VANS UA OLD SKOOL</p>
                            <p className="summary">$90 x <span className='counter'>{counterVans} </span><span className="result">${counterVans*90}</span></p>
                        </div>

                        <img src={remove} alt="delete" className='remove' onClick={handleClickRemoveVans}/>
                    </div>    

                    
                     <div className="rdy-checkout"  data-add-byfar={dataAddByFar}>

                        <img src={by1} alt="boots" className='mini-checkout-image'/>

                        <div className="summary-container">
                            <p className="product-name-para">By Far</p>
                            <p className="summary">$280 x <span className='counter'>{counterByFar} </span><span className="result">${counterByFar*280}</span></p>
                        </div>

                        <img src={remove} alt="delete" className='remove' onClick={handleClickRemoveByFar}/>

                    </div>    

                    <div className="rdy-checkout"  data-add-nike={dataAddNike}>

                        <img src={nike1} alt="boots" className='mini-checkout-image'/>

                        <div className="summary-container">
                            <p className="product-name-para">NIKE AIR FORCE 1 FONTANKA WOMEN'S</p>
                            <p className="summary">$120 x <span className='counter'>{counterNike} </span><span className="result">${counterNike*120}</span></p>
                        </div>

                        <img src={remove} alt="delete" className='remove' onClick={handleClickRemoveNike}/>

                    </div>   

                  <Link to="/checkout" className='link-no-effects'>
                    <button className=
                        {` ${dataAdd==true || dataAddVans==true || dataAddNike==true ||dataAddByFar==true ? 'checkout-btn glow-effect' : 'active'}`}>
                        Checkout
                        <svg className='glow-container'>
                            <rect pathLength={100} className='glow-blur'strokeLinecap='round'></rect>
                            <rect pathLength={100} className='glow-line' strokeLinecap='round'></rect>
                        </svg>
                    </button>
                  </Link> 
                </div>
            </div>
        </div>
     </nav>

   </header>
  )
}

export default Navbar