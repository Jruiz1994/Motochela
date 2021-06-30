import React, { useState } from "react";
import './ItemDetailed.css';

const ItemDetailed = ({id, name, image, price, description, stock}) =>{
    const [numero, setNumero] = useState(0);
  const handleIncrement = () => {
    if(numero >= 0 && numero < stock) setNumero(numero + 1);
  };

  const handleDecrement = () => {
    if(numero > 0) setNumero(numero - 1);
  };
  return (
<div className='itemDetailed'>
  <img src={image} alt="Foto del producto" className='fotoProducto'/>
  <h1 className='name'>{name}</h1>
  <h2 className='price'>${price}</h2>
  <p className='description'>{description}</p>
  <div className='button'>
  <button onClick={handleDecrement} className='botonesCantidad'>-</button>
  <p className='cantidad'>{numero}</p>
  <button onClick={handleIncrement} className='botonesCantidad'>+</button><br />
  <button>Agregar al carrito</button>
  </div>
</div>
  )}

  export default ItemDetailed;