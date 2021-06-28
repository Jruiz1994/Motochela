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
  }, {
    id: 5,
    name: "Whisky Jhonnie Walker Red Blend",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 850,
    stock: 6,
    description: 'Whisky Jhonnie Walker 1000mL'
  }, {
    id: 6,
    name: "Vodka Smirnoff",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 450,
    stock: 7,
    description: 'Vodka Smirnoff 1000mL'
  }, {
    id: 7,
    name: "Granadina",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 250,
    stock: 28,
    description: 'Granadina 1000mL'
  }, {
    id: 8,
    name: "Licor de crema",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 380,
    stock: 21,
    description: 'Licor de crema'
  }, {
    id: 9,
    name: "Licor de chocolate",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 380,
    stock: 23,
    description: 'Licor de chocolate 700mL'
  }, {
    id: 10,
    name: "Licor de frutilla",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 380,
    stock: 2,
    description: 'Licor de frutilla 700mL'
  }, {
    id: 11,
    name: "Licor de huevo",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 380,
    stock: 2,
    description: 'Licor de huevo 700mL'
  }, {
    id: 12,
    name: "Licor Amarula",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 850,
    stock: 22,
    description: 'Amarula 1000mL'
  }, {
    id: 13,
    name: "Ron blanco Pepe Cuervo",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 650,
    stock: 32,
    description: 'Ron blanco Pepe Cuervo 1000mL'
  }, {
    id: 14,
    name: "Vermouth Bianco Martini",
    image: 'http://macanudouy.com/images/virtuemart/product/40-04717.jpg',
    price: 420,
    stock: 23,
    description: 'Martini Bianco 1000mL'
  } ];

  return (
      <ItemList array={items}></ItemList>
  )
}
