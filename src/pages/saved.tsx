import React from 'react';
import { Layout } from 'antd';
import SavedListContainer from '../components/saved-list/saved-list';

const { Content } = Layout;

function Saved() {
  return (
    <>
      <Layout style={{ padding: '20px 16px' }}>
        <Content style={{ padding: '0 0 0 30px', minHeight: 500 }}>
          <SavedListContainer />
        </Content>
      </Layout>
    </>
  );
}

export default Saved;
