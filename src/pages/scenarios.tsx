import React from 'react';
import { Layout } from 'antd';
import ScenariosListContainer from '../components/scenarios-list-container/scenarios-list-container';
const { Content } = Layout;

function Scenarios() {
  return (
    <>
      <Layout style={{ padding: '20px 16px 210px 16px' }}>
        <Content style={{ padding: '0 0 0 30px', minHeight: 500 }}>
          <ScenariosListContainer />
        </Content>
      </Layout>
    </>
  );
}

export default Scenarios;
