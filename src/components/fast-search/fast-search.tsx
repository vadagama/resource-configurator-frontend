import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

const FastSearch = () => {
  return (
    <Search
      placeholder='Начните вводить название сервиса или услуги'
      allowClear
      enterButton='Search'
      size='large'
      style={{ paddingBottom: 30 }}
    />
  );
};

export default FastSearch;
