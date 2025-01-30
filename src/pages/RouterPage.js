import React from 'react';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link, BrowserRouter as Router } from 'react-router';
const { Header, Sider, Content } = Layout;

export const RouterPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()
    return (
            <Layout style={{ height: '100vh' }}>
                <Sider >
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: <Link to='/login'>Login</Link>,
                            },
                            {
                                    key: '2',
                                    icon: <VideoCameraOutlined />,
                                    label: <Link to='/cola'>Queue</Link>,
                                    
                            },
                            {
                                    key: '3',
                                    icon: <UploadOutlined />,
                                    label: <Link to='/crear'>Create ticket</Link>,
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        {/* <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    /> */}
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
    );
}
