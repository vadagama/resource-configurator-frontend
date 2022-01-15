import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const SiteFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        backgroundColor: '#000814',
        color: '#fff',
      }}
    >
      2022 Created by Severstal Infocom
    </Footer>
  );
};

export default SiteFooter;
