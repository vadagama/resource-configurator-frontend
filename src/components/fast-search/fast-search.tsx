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
    />
  );
};

export default FastSearch;
