import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const TopMenu = () => {
  return (
    <Menu
      theme='dark'
      mode='horizontal'
      defaultSelectedKeys={['1']}
      style={{ backgroundColor: '#000814' }}
    >
      <Menu.Item key='1'>
        <Link to='/services'>Сервисы и продукты</Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/saved'>Сохраненные расчеты</Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link to='/scenarios'>Типовые сценарии</Link>
      </Menu.Item>
      <Menu.Item key='4'>
        <Link to='/faq'>Часто задаваемые вопросы</Link>
      </Menu.Item>
    </Menu>
  );
};

export default TopMenu;
