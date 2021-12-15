import { Menu } from 'antd'
import { generateId } from 'common/generateId'
import Link from 'next/link'
import React from 'react'
import { connection } from 'stores/connection'
import useSWR from 'swr'
import { IMainMenu } from 'types/menu'

const Navbar = () => {
    const fetcher = (url: string) => connection({}, 'POST', url)
    const { data, error } = useSWR('/menu/list', fetcher)

    if (error) return <div>Intente más tarde</div>
    if (!data) return <div>Cargando...</div>

    return (
        <Menu mode="horizontal">
            {data.map((menu: IMainMenu) => (
                <Menu.Item key="app">
                    <Link key={generateId()} href={menu.href}>
                        {menu.label}
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}

export default Navbar
