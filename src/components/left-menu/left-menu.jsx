import React, { useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
const { Sider } = Layout;

const LeftMenu = (props) => {
  console.log(props);
  const handleClick = (event) => {
    props.getServiceListFilteredByType(event.key);
    if (event.key == 0) {
      props.getServiceList();
      props.setCurrentMenuItem(0);
    } else {
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
