import './Navbar.css';
import React from 'react';
import img from './logoDer.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <ul className='menu'>
        <a href='/'> <img src={img} alt="Logo de motochela" className='logo'/> </a>
        <Link to="/" className="Link">Productos</Link>
        <Link to="/nosotros" className="Link">Nosotros</Link>
        <Link to="/contacto" className="Link">Contacto</Link>
        <CartWidget/>
      </ul>
    </header>
  )
}

export default Navbar;
