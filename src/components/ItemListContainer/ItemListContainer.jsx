import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useCartContext} from '../../context/CartContext';
import React, {useEffect, useState} from 'react';

const ItemListContainer = () => {
  const { category } = useParams();
  const { database } = useCartContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!category) return setItems(database);
    let data = database.filter(item => item.category === category);
    setItems(data);
  }, [category, database]);

  return (
    <div className='container'>
      <ItemList items={items} />
    </div>
  )
}
export default ItemListContainer
