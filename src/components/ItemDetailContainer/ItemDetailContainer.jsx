// import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
// import axios from 'axios';
import './ItemDetailContainer.css';
import ItemDetail from '../../views/ItemDetail/ItemDetail';

function ItemDetailContainer({ match }) {
  const itemId = match.params.id;
  console.log(itemId);


	return (
		<div className='itemDetail' style={{ padding: 40 }}>
			return (
        <ItemDetail item=''></ItemDetail>
				);
		</div>
	);
}

export default ItemDetailContainer;

