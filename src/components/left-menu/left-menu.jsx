import React, { useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
const { Sider } = Layout;

const LeftMenu = (props) => {
  const handleClick = (event) => {
    if (event.key === '0') {
      props.getServiceList();
      props.setCurrentMenuItem(event.key);
    } else {
      props.getServiceListFilteredByType(event.key);
      props.setCurrentMenuItem(event.key);
    }
  };

  return (
    <Sider
      className='site-layout-background'
      width={200}
      style={{ padding: '' }}
    >
      <Menu
        mode='inline'
        defaultSelectedKeys={['0']}
        style={{ height: '100%' }}
      >
        {props.types.map((type) => (
          <Menu.Item onClick={handleClick} key={type.id}>
            {type.name}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default LeftMenu;
