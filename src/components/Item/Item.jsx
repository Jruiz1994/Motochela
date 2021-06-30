import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import './Item.css';

const Item = ({id, name, image, price, description, stock}) => {
  const [numero, setNumero] = useState(0);
  const handleIncrement = () => {
    if(numero >= 0 && numero < stock) setNumero(numero + 1);
  };

  const handleDecrement = () => {
    if(numero > 0) setNumero(numero - 1);
  };
  return (
<Card>
  <Link to={`/item/${id}`} >
      <Image src={image} wrapped ui={false} />
  </Link>
  <Card.Content>
    <Link to={`/item/${id}`} >
    <Card.Header>{name}</Card.Header>
    <Card.Meta>
      <span className='info'>{description}</span>
    </Card.Meta>
    <Card.Description>
      <p>${price} por unidad</p>
      </Card.Description>
      </Link>
      <button className='botonesCantidad' onClick={handleIncrement}>+</button>
      <button className='botonesCantidad' onClick={handleDecrement}>-</button>
      <p>{numero}</p>
  </Card.Content>
</Card>
  )}

  export default Item;