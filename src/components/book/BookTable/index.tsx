import React from 'react'
import { Button, Table } from 'antd'
import { columnsForm } from './columns'
import Link from 'next/link'
import { IBook } from 'types/book'
import { generateId } from 'common/generateId'

interface Props {
    book: IBook
}

const BookTable = ({ book }: Props) => {
    return (
        <div>
            <div style={{ margin: '15px' }}>
                <Button type="primary" style={{ float: 'right' }}>
                    <Link href="/book/new">Nuevo libro</Link>
                </Button>
            </div>

            <Table
                loading={!book}
                style={{ width: '100%' }}
                columns={columnsForm}
                dataSource={book.items || []}
                size="middle"
                pagination={false}
                showSorterTooltip={false}
                rowKey={() => generateId()}
            />
        </div>
    )
}
export default BookTable
