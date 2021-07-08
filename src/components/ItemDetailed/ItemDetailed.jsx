import React from 'react';
import './ItemDetailed.css';
import {useCartContext} from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailed = ({item}) =>{
 const { addToCart } = useCartContext();
  const onAdd = qty => addToCart(item, qty);

  return (
<div className='itemDetailed'>
  <img src={item.image} alt="Foto del producto" className='fotoProducto'/>
  <h1 className='name'>{item.name}</h1>
  <h2 className='price'>${item.price}</h2>
  <p className='description'>{item.description}</p>
{item.stock > 0 && <ItemCount onAdd={onAdd} stock={item.stock} />}

</div>
  )}

  export default ItemDetailed;