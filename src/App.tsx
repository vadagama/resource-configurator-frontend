import React from 'react';
import './App.css';
import { Layout } from 'antd';

import Header from './components/header/header';
import SiteFooter from './components/site-footer/site-footer';
import SiteContent from './components/site-content/site-content';
import TopMenu from './components/top-menu/top-menu';

function App() {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Header />
      <TopMenu />
      <SiteContent />
      <SiteFooter />
    </Layout>
  );
}

export default App;
