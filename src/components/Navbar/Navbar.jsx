import './Navbar.css';
import React from 'react';
import img from './logoDer.png';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  return (
    <header>
      
        <ul className='menu'>
      <img src={img} alt="Logo de motochela" className='logo'/>
          <li><a href='#'>Productos</a></li>
          <li><a href='#'>Nosotros</a></li>
          <li><a href='#'>Contacto</a></li>
      <CartWidget/>
        </ul>
      
    </header>
  )
}

export default Navbar;
