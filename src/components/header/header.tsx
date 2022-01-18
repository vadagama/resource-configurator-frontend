import React from 'react';
import { PageHeader } from 'antd';
import { Button } from 'antd';

const Header = () => {
  return (
    <PageHeader
      title='Конфигуратор'
      className='site-page-header'
      subTitle='Ресурс для быстрого формирования заявок на ИТ-оборудование и услуги'
      extra={[
        <div style={{ display: 'flex' }}>
          {/* <Button key='1'>Добавлено 3 ресурса</Button> */}
          <Button key='1'>Выйти из системы</Button>
        </div>,
      ]}
      avatar={{
        src: 'https://img.flaticon.com/icons/png/512/453/453635.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
      }}
    ></PageHeader>
  );
};

export default Header;
