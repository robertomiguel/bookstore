import { BookForm } from 'components/book/BookForm'

const BookNew = () => {
    return (
        <div>
            <h1>Nuevo libro</h1>
            <h3>
                (Muestra de formularios dinámicos,
                <br />
                cargados desde el servidor)
            </h3>
            <h3>(Muestra de validación, carga de libros no implementada)</h3>
            <BookForm />
        </div>
    )
}

export default BookNew
