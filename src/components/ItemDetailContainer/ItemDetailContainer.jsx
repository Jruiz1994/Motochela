import ItemDetailed from '../ItemDetailed/ItemDetailed';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://mocki.io/v1/22fbf394-b1fc-4947-935e-40f05c935f53")
      const foundItem = data.find(item => item.id === +id);
      setItem(foundItem);
    })();
  }, [id]);
 
	return (<> 
    <ItemDetailed {...item}/>
    </>
  );
  }
export default ItemDetailContainer;

