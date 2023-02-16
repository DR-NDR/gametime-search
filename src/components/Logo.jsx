import React from 'react';
import Gametime from '../assets/Gametime.jpeg';


const Logo = () => {
  return (
    <div className='logo-container'>
        <img className='main-logo' src={Gametime} alt="logo" />
    </div>
  )
}

export default Logo