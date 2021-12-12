import { NextApiRequest, NextApiResponse } from 'next'
import { IMainMenu } from 'types/menu'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const menu: IMainMenu[] = [
        { href: '/', label: 'Inicio' },
        { href: '/book/list', label: 'Lista de libros' },
        { href: '/about', label: 'A cerca de' },
    ]
    res.status(200).json(menu)
}
