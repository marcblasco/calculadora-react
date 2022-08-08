import React from "react";
import  '../App.css'
import freeCodeCampLogo from '../img/freecode.png';
 

function Logo(){

    return(
        <div className='logo-contenedor'>
      <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='Logo ' />
      </div>
    ); 
 
}

export default Logo;