import React from 'react'
import { Redirect } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { Table } from 'semantic-ui-react'

const Cart = () => {
    const { cart, clearCart } = useCartContext()

    if (!cart.length) return <Redirect to="/" />

    return (
        <div>
            {cart.map((item) => (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Producto</Table.HeaderCell>
                            <Table.HeaderCell>Cantidad</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.quantity}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            ))}
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
