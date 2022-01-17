import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import LeftMenuContainer from './../components/left-menu/left-menu-container';
import FastSearch from './../components/fast-search/fast-search';
import ServiceListContainer from './../components/service-list/service-list-container';
import ResultTable from './../components/result-table/result-table';

const { Content } = Layout;

function Services(props: any) {
  let [isSearchVisible, setSearchVisible] = useState(props.isSearchVisible);

  useEffect(() => {
    setSearchVisible(props.isSearchVisible);
  }, [props.isSearchVisible]);
  return (
    <>
      <Layout style={{ padding: '20px 16px' }}>
        <LeftMenuContainer />
        <Content style={{ padding: '0 0 0 30px', minHeight: 500 }}>
          {!isSearchVisible && <FastSearch />}
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
