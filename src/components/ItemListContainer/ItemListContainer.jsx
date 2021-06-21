import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer() {
const items = [{
    id: 1,
    name: "Cerveza Corona",
    image: 'https://cdnx.jumpseller.com/dc-central-distribuidora-de-licores/image/15981579/resize/540/540?1622918937',
    price: 55,
    stock: 14,
    description: 'Cerveza corona 330mL'
  }, {
    id: 2,
    name: "Fernet Branca",
    image: 'https://cdnx.jumpseller.com/mgdrinks/image/11331471/thumb/540/540?1616020247',
    price: 580,
    stock: 10,
    description: 'Fernet branca 750mL'
  }, {
    id: 3,
    name: "Vino Catamayor",
    image: 'https://mayoristadelparque.com.uy/wp-content/uploads/2021/05/Almadu2_1188_1-11.jpg',
    price: 140,
    stock: 4,
    description: 'Vino Catamayor 1000mL'
  }, {
    id: 4,
    name: "Whisky Chivas Regal",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 2450,
    stock: 2,
    description: 'Whisky Chivas Regal 1000mL'
  } ];

  return (
      <ItemList array={items}></ItemList>
  )
}