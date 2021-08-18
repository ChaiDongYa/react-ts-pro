import React from 'react';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import logo from '../../assets/images/logo.svg';
import { GlobalOutlined } from '@ant-design/icons';
import styles from './Header.module.css'
export const Header: React.FC<{}> = () => {
  return (
    <>
      <div className={styles['app-header']}>
        <div className={styles['top-header']}>
          <div className={styles['inner']}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: '15px' }}
              overlay={
                <Menu>
                  <Menu.Item>中文</Menu.Item>
                  <Menu.Item>英文</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}>
              语言
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              <Button>登录</Button>
              <Button>注册</Button>
            </Button.Group>
          </div>

        </div>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={2} className={styles.title}>React 旅游网</Typography.Title>
          <Input.Search
            className={styles.search}
            placeholder="请输入旅游目的地"></Input.Search>
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles['main-menu']}>
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末两日游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key={4}>私家游</Menu.Item>
          <Menu.Item key={5}>旅游首页</Menu.Item>
        </Menu>
      </div>
    </>
  )
}
export default Header