import './Navbar.css';
import React from 'react'
import {  Link, useHistory } from 'react-router-dom'
import img from './logoDer.png';
import carrito from './carrito.png';
import { Dropdown } from 'semantic-ui-react';

const Navbar = () => {
  
  let history = useHistory();
  const categoriesOptions = [
  {
    key: 'todo',
    text: 'Todas las categorias',
    value: ''
  },
    {
    key: 'cervezas',
    text: 'cervezas',
    value: 'cervezas'
  },
    {
    key: 'fernet',
    text: 'fernet',
    value: 'fernet'
  },
    {
    key: 'aperitivos',
    text: 'aperitivos',
    value: 'aperitivos'
  },
    {
    key: 'whisky',
    text: 'whisky',
    value: 'whisky'
  },
    {
    key: 'otros',
    text: 'otros',
    value: 'otros'
  }];

  const handleChange = (e) => {
    if (e.target.value){
      history.push(`/category/${e.target.value}`)
      }
  }

  return (
  <nav>
    <Link to='/'> <img src={img} alt="Logo de motochela" className='logo'/> </Link>
    <Link to="/" className='linksNavbar'>Home</Link>
    <Link to="/nosotros"  className='linksNavbar'>Nosotros</Link>
    <Link to="/contacto"  className='linksNavbar'>Contacto</Link>
    <Dropdown placeholder="Seleccione una categoria" selection options={categoriesOptions} onChange={handleChange} />
    <Link to='/cart'>
      <img src={carrito} alt="Carrito de compras" className='carrito'/>
    </Link>
  </nav>
  )
}
export default Navbar;
