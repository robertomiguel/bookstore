import { FormInstance, Radio } from 'antd'
import { generateId } from 'common/generateId'
import { observer } from 'mobx-react-lite'
import { useCallback, useEffect, useRef } from 'react'
import { useBookStore } from 'stores/book'
import { IBook } from 'types/book'
import BForm from './form'

export const BookForm = observer(() => {
    const bookStore = useBookStore()

    // Muestra de uso de referencias para controlar componentes desde afuera
    const formRef = useRef<FormInstance>(null)

    // Función que envía al API los datos del form validados
    const create = async (book: IBook) => {
        alert(JSON.stringify(book))
    }

    // En app real, se recupera los Formularios disponibles desde el server
    const formListDB = [
        { name: 'bookFormBasic', label: 'Carga Básica', default: true },
        { name: 'bookFormAdvance', label: 'Carga Avanzada' },
    ]

    // Carga dínamica de tipos de formularios
    const changeFormLayout = useCallback(
        async (formName: string) => {
            await bookStore.getForm(formName)
        },
        [bookStore]
    )

    // carga del forumario inicial
    useEffect(() => {
        changeFormLayout(formListDB.filter((f) => f.default)[0].name)
    }, [changeFormLayout])

    return (
        <div>
            <div className="formSetting">
                <Radio.Group
                    onChange={async (e) =>
                        await changeFormLayout(e.target.value)
                    }
                    defaultValue={formListDB.filter((f) => f.default)[0].name}
                >
                    {formListDB.map((formName) => (
                        <Radio.Button key={generateId()} value={formName.name}>
                            {formName.label}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </div>

            {bookStore.isFormLoaded && (
                <BForm create={create} formRef={formRef} />
            )}

            <style jsx>
                {`
                    .formSetting {
                        float: right;
                    }
                `}
            </style>
        </div>
    )
})
