import { Popconfirm, Space } from 'antd'
import Link from 'next/link'

interface IFormActionProps {
    id: string
}

export const FormAction = (props: IFormActionProps) => {
    return (
        <Space>
            <Link href={`/book/view/${props.id}`}>Editar</Link>

            <Popconfirm
                okText="Eliminar"
                cancelText="Cancelar"
                onConfirm={async () => {}}
                title="Confirmar eliminación (demo, no anda)"
            >
                <span style={{ cursor: 'pointer' }}>Borrar</span>
            </Popconfirm>
        </Space>
    )
}
