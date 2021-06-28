import React, { useState, useEffect } from "react";
import Item from '../Item/Item';
import { Link } from "react-router-dom";

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
      {items.map((item, id) => {
        return (
          <div key={id}>
            <Link to={`/detail/${item.id}`}>
				    <Item data={item}></Item>	
						</Link>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList
