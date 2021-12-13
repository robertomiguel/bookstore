import React, { useCallback, useEffect } from 'react'
import { useBookStore } from 'stores/book'
import { Button, Table } from 'antd'
import { columnsForm } from './columns'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'

const BookTable = observer(() => {
    const bookStore = useBookStore()

    const getList = useCallback(() => {
        bookStore.getList()
    }, [bookStore])

    useEffect(() => {
        getList()
    }, [getList])

    return (
        <div>
            <div style={{ margin: '15px' }}>
                <Button type="primary" style={{ float: 'right' }}>
                    <Link href="/book/new">Nuevo libro</Link>
                </Button>
            </div>
            {bookStore.list.items && (
                <Table
                    loading={bookStore.isLoading}
                    style={{ width: '100%' }}
                    columns={columnsForm}
                    dataSource={bookStore.list.items}
                    size="middle"
                    pagination={false}
                    showSorterTooltip={false}
                />
            )}
        </div>
    )
})
export default BookTable
