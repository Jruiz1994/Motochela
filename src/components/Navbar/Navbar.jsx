import './Navbar.css';
import React from 'react'
import { useHistory } from 'react-router-dom'
import img from './logoDer.png';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  const history = useHistory([]);

  const handleChange = (e) => {
    if (e.target.value)
      history.push(`/category/${e.target.value}`);
  }
  return (
    <header>
      <ul className='menu'>
        <a href='/'> <img src={img} alt="Logo de motochela" className='logo'/> </a>
        <select onChange={handleChange}>
        <option value="">Seleccione categoría</option>
        <option value="cervezas">cervezas</option>
        <option value="whisky">whisky</option>
        <option value="fernet">fernet</option>
        <option value="aperitivos">aperitivos</option>
        <option value="otros">otros</option>
      </select>
        <CartWidget/>
      </ul>
    </header>
  )
}

export default Navbar;
