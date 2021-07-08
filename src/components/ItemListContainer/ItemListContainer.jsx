import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useCartContext} from '../../context/CartContext';
import React, {useEffect, useState} from 'react';

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const { database } = useCartContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!categoryName) return setItems(database);
    const data = database.filter(item => item.category === categoryName);
    setItems(data);
  }, [categoryName, database]);

  return (
    <ItemList items={items} />
  )
}
export default ItemListContainer
