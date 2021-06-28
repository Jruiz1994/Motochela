// import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
// import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'

const ItemDetail = ({ data }) => {
	console.log(data)
  return (
    
		<div className='Home' style={{ padding: 40 }}>
			<Card>
      <Image src={data.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Meta>
          <span className='info'>{data.description}</span>
        </Card.Meta>
        <Card.Description>
          <p>${data.price} por unidad</p>
        </Card.Description>
      </Card.Content>
    </Card>
		</div>
	);
};

export default ItemDetail;
