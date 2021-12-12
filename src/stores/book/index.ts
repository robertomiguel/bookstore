import { createContext } from 'react'
import { observable, toJS } from 'mobx'
import { IBook } from 'types/book'
import { connection } from 'stores/connection'

export interface IBookStore {
    isLoading: boolean
    list: IBook
    form: any
    getList: (filter?: any) => Promise<void>
    getById: (bookId: string) => Promise<IBook>
    create: (book: IBook) => Promise<string>
    update: (book: IBook) => Promise<boolean>
    delete: (bookId: string) => Promise<boolean>
    getForm: (formName: string) => Promise<void>
}

const bookStore = () =>
    observable<IBookStore>({
        list: {} as IBook,
        isLoading: false,
        form: { form: { maxWidth: '400px' }, children: [] },
        async getList() {
            return (this.list = await connection({}, 'POST', '/book/list'))
        },
        async getById(bookId: string) {
            return {} as IBook
        },
        async create(book: IBook) {
            return 'ok'
        },
        async update(book: IBook) {
            return true
        },
        async delete(bookId: string) {
            return true
        },
        async getForm(formName: string) {
            return await connection({ name: formName }, 'GET', '/form/getById')
        },
    })

export default createContext(bookStore())
