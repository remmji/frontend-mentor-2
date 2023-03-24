import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import AnimatedPage from './AnimatedPage';

function Congratulations() {

    const location = useLocation();
    const name = location.state?.name;
    const adres = location.state?.adres;
    const email = location.state?.email;

  return (
    <AnimatedPage>
    <div className="congratulations-container">
        <h1 className="success">
            SUCCESS !
        </h1>
        <h3 className="info-success">
            Dear <span className='orange'>{name}</span>, Your new shoes will be send shortly to <span className='orange'>{adres}</span>.
            <br/>
            We will send you a confirmation on <span className='orange'>{email}</span>.
        </h3>
       <Link to="/" className='link-no-effects'> <button className="back">Main Page</button></Link>
    </div>
    </AnimatedPage>
  )
}

export default Congratulations