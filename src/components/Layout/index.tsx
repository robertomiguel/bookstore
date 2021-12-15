import React from 'react'
import Navbar from './Navbar'
import { Layout as LayoutAntD } from 'antd'

const Layout: React.FC = ({ children }) => {
    const { Header, Footer, Content } = LayoutAntD

    return (
        <LayoutAntD>
            <Header style={{ background: 'white', width: '100%' }}>
                <Navbar />
            </Header>

            <Content style={{ textAlign: 'center' }}>{children}</Content>

            <Footer style={{ textAlign: 'center' }}>Pie de página</Footer>
        </LayoutAntD>
    )
}

export default Layout
