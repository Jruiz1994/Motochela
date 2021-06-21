import React, { useState, useEffect } from "react";
import Item from '../Item/Item';

function ItemList({array}) {
    const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(array);
      console.log(items);
    }, 2000);
  });
  return (
    <div className="App">
      <h1>Productos</h1>
      {items.map((item, idx) => {
        return (
          <div key={idx}>
            <Item id={item.id} name= {item.name} image={item.image} description={item.description} price={item.price} stock={item.stock}></Item>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList
