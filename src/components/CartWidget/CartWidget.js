import React from 'react';
import carrito from './carrito.png';
import './CartWidget.css';

function CartWidget() {
    return ( 
      <img src={carrito} alt="Carrito de compras" className='carrito'/>
    )
}

export default CartWidget