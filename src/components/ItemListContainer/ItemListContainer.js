import React from 'react';
import './ItemListContainer.css';
import Items from '../Items/Items';
import pedro from './pedro.jpg';
import ana from './ana.jpg';

function ItemListContainer({greeting}) {
  return (
  <div className='container'>
    <Items name='Pedro' imagen={pedro} date='Joined in 2015' description='Developer'></Items>
    <Items name='Ana' imagen={ana} date='Joined in 2017' description='RRHH'></Items>
    <h1>Hola {greeting}!! :)</h1>
  </div>
  )
}
export default ItemListContainer;