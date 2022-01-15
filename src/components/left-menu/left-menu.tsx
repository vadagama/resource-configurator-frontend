import React from 'react';
import { Menu, Layout } from 'antd';
const { Sider } = Layout;

const LeftMenu = () => {
  return (
    <Sider
      className='site-layout-background'
      width={200}
      style={{ padding: '' }}
    >
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        <Menu.Item key='1'>Все сервисы</Menu.Item>
        <Menu.Item key='2'>Вычисления</Menu.Item>
        <Menu.Item key='3'>Базы данных</Menu.Item>
        <Menu.Item key='4'>Хранение объектов</Menu.Item>
        <Menu.Item key='5'>Управление проектом</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LeftMenu;
