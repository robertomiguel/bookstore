import React, { useCallback, useContext, useEffect } from 'react'
import BookStore from 'stores/book'
import { Button, Table } from 'antd'
import { columnsForm } from './columns'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

const BookTable = observer(() => {
    const bookStore = useContext(BookStore)

    const getList = useCallback(() => {
        bookStore.getList()
    }, [bookStore])

    useEffect(() => {
        getList()
    }, [getList])

    return (
        <div>
            <div>
                <Button style={{ float: 'right' }}>
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
