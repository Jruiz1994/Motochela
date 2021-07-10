import React from 'react'
import { Table } from 'semantic-ui-react'

const TableWrapper = (item) => {
    console.log(`item`, item)
    return (
        <Table.Row>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.quantity}</Table.Cell>
        </Table.Row>
    )
}
export default TableWrapper
