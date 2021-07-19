import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useCartContext } from '../context/CartContext'
import { db } from '../Firebase/firebase'

function Checkout() {
    const { cart } = useCartContext()

    const confirm = async () => {
        const order = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            tel: document.getElementById('tel').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            notas: document.getElementById('notas').value,
            cart: cart,
        }
        await db.collection('Orders').doc().set(order)
    }

    return (
        <div className="container">
            <Form className="form">
                <h1>Realizar pedido</h1>
                <Form.Field style={{ width: 600 }}>
                    <label>Nombre</label>
                    <input id="name" placeholder="Nombre" />
                </Form.Field>
                <Form.Field style={{ width: 600 }}>
                    <label>Apellido</label>
                    <input id="surname" placeholder="Apellido" />
                </Form.Field>
                <Form.Field style={{ width: 600 }}>
                    <label>Teléfono</label>
                    <input id="tel" type="number" placeholder="Teléfono" />
                </Form.Field>
                <Form.Field style={{ width: 600 }}>
                    <label>Email</label>
                    <input id="email" placeholder="Email" />
                </Form.Field>
                <Form.Field style={{ width: 600 }}>
                    <label>Dirección</label>
                    <input id="address" placeholder="Dirección" />
                </Form.Field>
                <Form.Field style={{ width: 600 }}>
                    <label>Notas</label>
                    <input id="notas" placeholder="Notas" />
                </Form.Field>
                <Button type="submit" onClick={confirm}>
                    Realizar pedido
                </Button>
            </Form>
        </div>
    )
}

export default Checkout
