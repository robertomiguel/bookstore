import { ColumnsType } from 'antd/lib/table'
import { generateId } from 'common/generateId'
import { IBookItem } from 'types/book'
import { FormAction } from './action'
import cellComponents from 'components/renders/list'
import Image from 'next/image'

export const columnsForm: ColumnsType<IBookItem> = [
    {
        title: 'Portada',
        dataIndex: 'volumeInfo',
        width: '15em',
        key: generateId(),
        render: (value) => (
            <Image
                src={value.imageLinks.smallThumbnail}
                width={70}
                height={150}
            />
        ),
    },
    {
        title: 'Título',
        dataIndex: 'volumeInfo',
        width: '15em',
        key: generateId(),
        render: (value) => <span>{value.title}</span>,
    },
    {
        title: 'Publicador',
        dataIndex: 'volumeInfo',
        key: generateId(),
        width: '10em',
        render: (value) => <span>{value.publisher}</span>,
    },
    {
        title: 'Descripción',
        dataIndex: 'volumeInfo',
        key: generateId(),
        width: '10em',
        render: (value) =>
            cellComponents['descriptionText']({
                description: value.description,
            }),
    },
    {
        title: '',
        dataIndex: 'id',
        key: generateId(),
        width: '10em',
        align: 'right',
        render: (id: string) => <FormAction id={id} />,
    },
]
