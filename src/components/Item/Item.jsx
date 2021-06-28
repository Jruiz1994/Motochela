import React, { useState } from "react";
import { Card, Image } from 'semantic-ui-react';

function Item({data}) {
  const [numero, setNumero] = useState(0);
  const handleIncrement = () => {
    if(numero >= 0 && numero < data.stock) setNumero(numero + 1);
  };

  const handleDecrement = () => {
    if(numero > 0) setNumero(numero - 1);
  };
  return (
<Card>
      <Image src={data.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Meta>
          <span className='info'>{data.description}</span>
        </Card.Meta>
        <Card.Description>
          <p>${data.price} por unidad</p>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <p>{numero}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  )}

  export default Item;