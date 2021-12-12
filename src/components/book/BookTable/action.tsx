import { Popconfirm } from 'antd'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

interface IFormActionProps {
    id: string
}

export const FormAction = observer((props: IFormActionProps) => {
    return (
        <div>
            <Link href={`/book/view/${props.id}`}>Editar</Link>

            <Popconfirm
                okText="Eliminar"
                cancelText="Cancelar"
                onConfirm={async () => {}}
                title="Confirmar eliminación"
            >
                Borrar
            </Popconfirm>
        </div>
    )
})
