import * as React from 'react';
import styles from './SideMenu.module.css';
import { sideMenuList } from './mockup';
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons';
export const SideMenu: React.FC<{}> = () => {
  return (
    <Menu mode="vertical" className={styles['sideMenu']}>
      {
        sideMenuList.map((m, mIndex) => (
          <Menu.SubMenu
            key={`side-menu-${m.id}-${mIndex}`}
            title={<span><GifOutlined />{ m.title }</span>}
          >
            {
              m.subMenu.map((sm, smIndex) => (
                <Menu.SubMenu
                  key={`sub-menu-${sm.id}-${smIndex}`}
                  title={<span><GifOutlined />{sm.title}</span>}
                >
                  {
                    sm.subMenu.map((sms, smsIndex) => (
                      <Menu.Item
                        key={`sub-sub-menu-${sm.id}-${smsIndex}`}
                      >
                        <span><GifOutlined />{sms}</span>
                      </Menu.Item>
                    ))
                  }
                </Menu.SubMenu>
              ))
            }
          </Menu.SubMenu>
        ))
      }
    </Menu>
  )
}