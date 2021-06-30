import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://mocki.io/v1/22fbf394-b1fc-4947-935e-40f05c935f53");
      if (!categoryName) return setItems(data);
      const catItems = data.filter(item => item.category === categoryName);
      setItems(catItems);
    })();
  }, [categoryName]);
  return (
    <div className='container'>
      <ItemList items={items} />
</div>
)
}
export default ItemListContainer