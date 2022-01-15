import React from 'react';
import { Menu } from 'antd';

const TopMenu = () => {
  return (
    <Menu
      theme='dark'
      mode='horizontal'
      defaultSelectedKeys={['1']}
      style={{ backgroundColor: '#000814' }}
    >
      <Menu.Item key='1'>Сервисы и продукты</Menu.Item>
      <Menu.Item key='2'>Сохраненные расчеты</Menu.Item>
      <Menu.Item key='3'>Типовые сценарии</Menu.Item>
      <Menu.Item key='4'>Часто задаваемые вопросы</Menu.Item>
    </Menu>
  );
};

export default TopMenu;
