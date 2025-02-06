import React, { useContext } from 'react';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import {CreateTicket} from './CreateTicket';
import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { Escritorio } from './Escritorio';
import { UiContext } from '../context/UiContext';

const { Header, Sider, Content } = Layout;

export const RouterPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const {ocultarMenu} = useContext(UiContext);

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider 
                collapsedWidth="0" 
                breakpoint="md"
                hidden={ocultarMenu}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link to='/ingresar'>Ingresar</Link>,
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: <Link to='/cola'>Cola de Tickets</Link>,
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: <Link to='/create'>Create Ticket</Link>,
                        },
                        // {
                        //     key: '4',
                        //     icon: <UserOutlined />,
                        //     label: <Link to='/escritorio'>Escritorio</Link>,
                        // },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                        <Routes>
                            <Route path='/ingresar' element={<Ingresar />} />
                            <Route path='/cola' element={<Cola />} />
                            <Route path='/create' element={<CreateTicket />} />
                            <Route path='/escritorio' element={<Escritorio />} />
                            <Route path='/*' element={<Navigate to='/Escritorio' />} />
                        </Routes>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};