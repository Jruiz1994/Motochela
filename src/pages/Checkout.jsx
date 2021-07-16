import React from 'react'
import { Button, Form, Select } from 'semantic-ui-react'

function Checkout() {
    const options = [
        { key: 'tc', text: 'Tarjeta de crédito', value: 'tc' },
        { key: 'td', text: 'Tarjeta de débito', value: 'td' },
        { key: 'mp', text: 'Mercado Pago', value: 'mp' },
        { key: 'ef', text: 'Efectivo', value: 'ef' },
    ]
    return (
        <div className="container">
            <Form className="form">
                <h1>Realizar pedido</h1>
                <Form.Field style={{ width: 600 }}>
                    <label>Nombre</label>
                    <input placeholder="Nombre" />
                </Form.Field>
                <Form.Field style={{ width: 600 }}>
                    <label>Apellido</label>
                    <input placeholder="Apellido" />
                </Form.Field>
                <Form.Field style={{ width: 600 }}>
                    <label>Teléfono</label>
                    <input type="number" placeholder="Teléfono" />
                </Form.Field>
                <Form.Field style={{ width: 600 }}>
                    <label>Dirección</label>
                    <input placeholder="Dirección" />
                </Form.Field>
                <Form.Field
                    control={Select}
                    label="Método de pago que utilizará en la entrega"
                    options={options}
                    placeholder="Método de pago"
                />
                <Button type="submit">Realizar pedido</Button>
            </Form>
        </div>
    )
}

export default Checkout
