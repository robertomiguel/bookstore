import { Input, Form, Button } from 'antd'
import BookTable from 'components/book/BookTable'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useBookStore } from 'stores/book'

interface Params extends Record<string, any> {
    q: string
}

const BookList = observer(() => {
    const book = useBookStore()

    const getBookList = async (query: string) => {
        const res = await (
            await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${query}`
            )
        ).json()
        book.list = res
    }

    const search = async (value: Params) => {
        getBookList(value.q)
    }
    return (
        <div>
            <h2>Muestra de consulta externa, usando API de Google Book</h2>
            <Form
                layout="inline"
                onFinish={(v) => search(v as unknown as Params)}
            >
                <Form.Item
                    name="q"
                    label="Busca en título"
                    style={{ width: '30%' }}
                    rules={[
                        {
                            required: true,
                            message: 'ingresar un texto para buscar',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Button htmlType="submit">Buscar</Button>
            </Form>
            {book.list && book.list.items && <BookTable book={book.list} />}
        </div>
    )
})
export default BookList
