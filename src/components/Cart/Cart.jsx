import React from 'react'
import { Redirect } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { Table } from 'semantic-ui-react'
import TableWrapper from '../TableWrapper/TableWrapper'

const Cart = () => {
    const { cart, clearCart } = useCartContext()

    if (!cart.length) return <Redirect to="/" />
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Producto</Table.HeaderCell>
                        <Table.HeaderCell>Cantidad</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {cart.map((item) => (
                        <TableWrapper {...item} />
                    ))}
                </Table.Body>
            </Table>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
