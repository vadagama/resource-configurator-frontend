import React from 'react';
import { Layout, Image } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
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
      Made with
      <Avatar
        src={
          <img
            src='https://www.pinclipart.com/picdir/big/55-551376_love-heart-symbol-heart-svg-clipart.png'
            style={{ width: 15, height: 15, display: 'inline' }}
            alt='love'
          />
        }
      />
      by Severstal Infocom in 2022
    </Footer>
  );
};

export default SiteFooter;
