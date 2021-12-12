import React from 'react'
import Navbar from './Navbar'
import { Layout as LayoutAntD } from 'antd'

const Layout: React.FC = ({ children }) => {
    const { Header, Footer, Content } = LayoutAntD
    return (
        <LayoutAntD>
            <Header>
                <Navbar />
            </Header>
            <Content>{children}</Content>

            <Footer>Pie de página</Footer>
        </LayoutAntD>
    )
}

export default Layout
