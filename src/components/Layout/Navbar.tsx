import { Menu } from 'antd'
import { generateId } from 'common/generateId'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { connection } from 'stores/connection'
import { IMainMenu } from 'types/menu'

const Navbar = () => {
    const [menuList, setMenuList] = useState<IMainMenu[]>([])

    const getList = useCallback(async () => {
        const list = await connection({}, 'POST', '/menu/list')
        setMenuList(() => list)
    }, [])

    useEffect(() => {
        getList()
    }, [getList])

    return (
        <Menu mode="horizontal">
            {menuList &&
                menuList.map((menu) => (
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
