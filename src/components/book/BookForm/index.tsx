import { FormInstance } from 'antd'
import { useContext, useRef } from 'react'
import BookStore, { IBookStore } from 'stores/book'
import { IBook } from 'types/book'
import { BForm } from './form'

export const BookForm = () => {
    const bookStore = useContext<IBookStore>(BookStore)

    // Muestra de uso de referencias para controlar componentes desde afuera
    const formRef = useRef<FormInstance>(null)

    const create = async (book: IBook) => {
        console.log('nuevo book: ', book)
    }

    return (
        <div>
            <BForm bookStore={bookStore} create={create} formRef={formRef} />
        </div>
    )
}
