import './Navbar.css';
import React from 'react'
import {  Link, useHistory } from 'react-router-dom'
import img from './logoDer.png';
import CartWidget from '../CartWidget/CartWidget';
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
    text: 'Cervezas',
    value: 'cervezas'
  },
    {
    key: 'fernet',
    text: 'Fernet',
    value: 'fernet'
  },
    {
    key: 'aperitivos',
    text: 'Aperitivos',
    value: 'aperitivos'
  },
    {
    key: 'whisky',
    text: 'Whisky',
    value: 'whisky'
  },
    {
    key: 'otros',
    text: 'Otros',
    value: 'otros'
  }];

  const redirect = (event, {name, value}) => {
    console.log(`value`, value)
    if(value === ''){
      history.push('/');
      
    }else{
    history.push('/category/' + value);
    }
  }

  return (
    <header>
      <ul className='menu'>
        <Link to='/'> <img src={img} alt="Logo de motochela" className='logo'/> </Link>
        <nav>
         <ul>
           <li>
             <Link to="/" className='linksNavbar'>Home</Link>
           </li>
           <li>
             <Link to="/nosotros"  className='linksNavbar'>Nosotros</Link>
           </li>
           <li>
             <Link to="/contacto"  className='linksNavbar'>Contacto</Link>
           </li>
         </ul>
       </nav>
        
      <Dropdown placeholder="Seleccione una categoria" selection options={categoriesOptions} onChange={redirect} />

        <CartWidget/>
      </ul>
    </header>
  )
}



export default Navbar;
