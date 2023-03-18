import React from 'react';
import { useState } from 'react';
import logo from './assets/logo.svg';
import avatar from './assets/image-avatar.png';
import cart from './assets/icon-cart.svg';
import remove from './assets/icon-delete.svg';
import image1 from './assets/image-product-1.jpg';
function Navbar({counter,setCounter,dataZero,dataAdd,setDataAdd,setDataZero}) {

 const [isMobileOpen,setIsMobileOpen] = useState('false');
 const[active,setActive] = useState(true);

    function toggleActive(){
        setActive(!active);
    }

    function toggleMobileOpen () {
        setIsMobileOpen(!isMobileOpen);
    }
    const handleClickRemove = () => {
    setDataZero('true');
    setDataAdd('false');
    setCounter(0);
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
                <li><a href='#'>Collections</a></li>
                <li><a href='#'>Men</a></li>
                <li><a href='#'>Women</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

            <div className="cart-avatar-container">
                <button className='cart-btn'><img src={cart} alt="cart" className='cart' onClick={toggleActive}/></button>
                <span className='counter-cart' data-visiblee={counter > 0 ? 'true' : 'false'}>{counter}</span>
                <img src={avatar} alt="avatar" className='avatar' />
                <div className={`checkout-center ${active ? 'active' : ''}`}>
                  
                   
                    <p className="checkout-para-top">Cart</p>

                    <p className="checkout-para-bot" /*data-zero={counter==0?'true':'false'}*/ data-zero={dataZero}>Your cart is empty</p>
                   

                    <div className="rdy-checkout" /*data-zero={counter>0?'true':'false'}*/ data-add={dataAdd}>
                        <img src={image1} alt="boots" className='mini-checkout-image'/>

                        <div className="summary-container">
                            <p className="product-name-para">Fall Limited Edition Sneakers</p>
                            <p className="summary">$125 x <span className='counter'>{counter} </span><span className="result">${counter*125}</span></p>
                        </div>
                        <img src={remove} alt="delete" className='remove' onClick={handleClickRemove}/>
                         <button className='checkout-btn'>Checkout</button>
                    </div>
                   
             </div>
            </div>
        </div>
     </nav>

   </header>
  )
}

export default Navbar