import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Header from './components/header/header';
import SiteFooter from './components/site-footer/site-footer';
import TopMenu from './components/top-menu/top-menu';
import SiteRoutes from './routes/routes';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Header />
      <TopMenu />
      <Content style={{ padding: '0' }}>
        <SiteRoutes />
      </Content>
      <SiteFooter />
    </Layout>
  );
}

export default App;
