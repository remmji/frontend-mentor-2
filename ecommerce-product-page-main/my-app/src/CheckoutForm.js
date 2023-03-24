import React from 'react'
import image1 from './assets/image-product-1.jpg';
import vans1 from './assets/vans.jpg';
import by1 from './assets/byfar1.png';
import nike1 from './assets/nike1.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import { motion } from 'framer-motion';

function CheckoutForm({counter, dataAdd,counterVans, dataAddVans,
                         dataAddByFar, counterByFar, dataAddNike,  counterNike} ) {

    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [adres,setAdres] = useState('');
    const [cardNumber,setCardNumber] = useState('');
    const navigate = useNavigate();

    function handleSubmit (e){
        e.preventDefault();

        if (!name) {
        alert('Please enter your name');
        return;
        }
        if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        alert('Please enter a valid email address');
        return;
        }
         if (!adres) {
        alert('Please enter your address');
        return;
        }
        if (!cardNumber.match(/^\d{16}$/)) {
        alert('Please enter a 16-digit card number');
        return;
        }
        navigate('/congratulations',{state:{name:name,adres:adres,email:email}});
    }

  return (
    <AnimatedPage>
        
    <main className="checkout-main">

        <div className="form-container">
              <form className='form'>

                <motion.div className="name-container"
                    initial={{y:-500}}
                    animate={{y:0}}
                    transition={{delay:0.2,duration:0.2}}>
                    <label htmlFor="name">FULL NAME</label>
                    <input type="text" id="name" placeholder="e.g. Rick Sanchez" value={name} onChange={(e) => setName(e.target.value)}/>
                </motion.div>

                <motion.div className="email-container"
                    initial={{y:-500}}
                    animate={{y:0}}
                    transition={{delay:0.4,duration:0.2}}>
                    <label htmlFor="surname">EMAIL</label>
                    <input type="email" id="text" placeholder="e.g. sneakerseeker@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </motion.div>

                <motion.div className="adress-container"
                    initial={{y:-500}}
                    animate={{y:0}}
                    transition={{delay:0.6,duration:0.2}}>
                    <label htmlFor="adres">ADDRESS</label>
                    <input type="text" id="adres" placeholder="e.g. Gotham City" value={adres} onChange={(e) => setAdres(e.target.value)}/>
                </motion.div>

                <motion.div className="cardnumber-container"
                    initial={{y:-500}}
                    animate={{y:0}}
                    transition={{delay:0.8,duration:0.2}}>
                    <label htmlFor="card-number">CARD NUMBER</label>
                    <input type="text" id="card-number" placeholder="e.g. 0000111122223333" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
                </motion.div>
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0,duration:1}}>
                    <button className="confirm glow-effect" onClick={handleSubmit}>
                        Confirm and Buy
                        <svg className='glow-container'>
                            <rect pathLength={100} className='glow-blur'strokeLinecap='round'></rect>
                            <rect pathLength={100} className='glow-line' strokeLinecap='round'></rect>
                        </svg>
                    </button>
                </motion.div>
            </form>
        </div>




        <motion.div className="basket-container"
            initial={{x:1000}}
            animate={{x:0}}
            transition={{delay:0.5,duration:1}}>
             <div className="basket-center">

                    <p className="checkout-cart">Cart</p>
                        <div className="orange-line"></div>

                    <div className="rdy-checkout-sum"  data-add={dataAdd}>
                        <img src={image1} alt="boots"className='mini-checkout-image'/>
                        <div className="summary-container">
                            <p className="product-name-para">Fall Limited Edition Sneakers</p>
                            <p className="summary">$125 x <span className='counter'>{counter} </span><span className="result">${counter*125}</span></p>
                        </div>
                    </div>

                    <div className="rdy-checkout-sum"  data-add-vans={dataAddVans}>
                        <img src={vans1} alt="boots" className='mini-checkout-image'/>
                        <div className="summary-container">
                            <p className="product-name-para">VANS UA OLD SKOOL</p>
                            <p className="summary">$90 x <span className='counter'>{counterVans} </span><span className="result">${counterVans*90}</span></p>
                        </div>
                    </div>    

                    
                     <div className="rdy-checkout-sum"  data-add-byfar={dataAddByFar}>
                        <img src={by1} alt="boots" className='mini-checkout-image'/>
                        <div className="summary-container">
                            <p className="product-name-para">By Far</p>
                            <p className="summary">$280 x <span className='counter'>{counterByFar} </span><span className="result">${counterByFar*280}</span></p>
                        </div>
                    </div>    

                     <div className="rdy-checkout-sum"  data-add-nike={dataAddNike}>
                        <img src={nike1} alt="boots" className='mini-checkout-image'/>
                        <div className="summary-container">
                            <p className="product-name-para">NIKE AIR FORCE 1 FONTANKA WOMEN'S</p>
                            <p className="summary">$120 x <span className='counter'>{counterNike} </span><span className="result">${counterNike*120}</span></p>
                        </div>
                    </div> 

                    <div className="orange-line"></div>
                     <h3 className="total">Total: ${counter*125+counterVans*90+counterByFar*280+counterNike*120}</h3>

                </div>
        </motion.div>

    </main>
    </AnimatedPage>
  )
}

export default CheckoutForm