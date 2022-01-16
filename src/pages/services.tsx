import React from 'react';
import { Layout } from 'antd';
import LeftMenu from './../components/left-menu/left-menu';
import FastSearch from './../components/fast-search/fast-search';
import ServiceListContainer from './../components/service-list/service-list-container';
import ResultTable from './../components/result-table/result-table';

const { Content } = Layout;

function Services() {
  return (
    <>
      <Layout style={{ padding: '20px 16px' }}>
        <LeftMenu />
        <Content style={{ padding: '0 0 0 30px', minHeight: 500 }}>
          <FastSearch />
          <ServiceListContainer />
        </Content>
      </Layout>
      <Layout>
        <ResultTable />
      </Layout>
    </>
  );
}

export default Services;
