import { Input, Form, Button, FormInstance, Affix } from 'antd'
import BookTable from 'components/book/BookTable'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { IBook } from 'types/book'

interface Params extends Record<string, any> {
    q: string
}

interface Props {
    bookList: IBook
    query: string
}

const BookList = ({ bookList, query }: Props) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const search = async (value: Params) => {
        setIsLoading(() => true)
        router.push(`/book/list?q=${encodeURI(value.q)}`)
    }

    useEffect(() => {
        setIsLoading(() => false)
    }, [bookList])

    const { Search } = Input

    const formRef = useRef<FormInstance>(null)

    return (
        <div style={{ background: 'white', width: '100%' }}>
            <h2>Muestra de consulta externa, usando API de Google Book</h2>
            <Form
                layout="inline"
                onFinish={(v) => search(v as unknown as Params)}
                initialValues={{ q: query }}
                ref={formRef}
            >
                <Affix offsetTop={10} style={{ width: '100%' }}>
                    <Form.Item
                        name="q"
                        style={{
                            maxWidth: '400px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            boxShadow: '2px 2px #7da0a0',
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'ingresar un texto para buscar',
                            },
                        ]}
                    >
                        <Search
                            placeholder="Busca un título"
                            onSearch={() => formRef.current?.submit()}
                            loading={isLoading}
                        />
                    </Form.Item>
                </Affix>
            </Form>
            {bookList && bookList.items && <BookTable book={bookList} />}
            {bookList && !bookList.items && (
                <h2>No hay libros que contengan: {query}</h2>
            )}
        </div>
    )
}

export default BookList

// Se ejecuta en el servidor
export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context.query?.q || 'react'

    const bookList = await (
        await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${decodeURI(
                query.toString()
            )}`
        )
    ).json()

    /* context.res.setHeader(
        'location',
        `${context.resolvedUrl}?q=${encodeURI(query.toString())}`
    ) */
    return {
        props: {
            bookList,
            query,
        },
    }
}
