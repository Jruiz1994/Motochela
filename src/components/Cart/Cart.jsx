import React from 'react'
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const Cart = () => {
  const { cart, clearCart } = useCartContext();

  if (!cart.length) return <Redirect to='/' />;

  return (
    <div>
      {cart.map((item) => (
      <table border='1'>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
        </tr>
        <tr>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        </tr>
      </table>
      ))}
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart