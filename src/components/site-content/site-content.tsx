import React from 'react';
import { Layout } from 'antd';
import LeftMenu from './../left-menu/left-menu';
import FastSearch from './../fast-search/fast-search';
import ServiceTypes from '../service-types/service-types';
import ResultTable from './../result-table/result-table';

const { Content } = Layout;

const SiteContent = () => {
  return (
    <Content style={{ padding: '0' }}>
      <Layout
        className='site-layout-background'
        style={{ padding: '20px 16px' }}
      >
        <LeftMenu />
        <Content style={{ padding: '0 0 0 30px', minHeight: 500 }}>
          <FastSearch />
          <ServiceTypes />
        </Content>
      </Layout>
      <Layout>
        <ResultTable />
      </Layout>
    </Content>
  );
};

export default SiteContent;
