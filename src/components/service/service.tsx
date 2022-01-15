import React from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const Service = () => {
  const content = [
    {
      title: 'Oracle database',
      description: 'Система управления базами данных компании Oracle',
      image: (
        <Avatar
          size={48}
          src='https://edu.sqi.ng/wp-content/uploads/2019/05/oracle.jpg'
          alt='Oracle'
        />
      ),
    },
    {
      title: 'Oracle database',
      description: 'Система управления базами данных компании Oracle',
      image: (
        <Avatar
          size={48}
          src='https://img2.freepng.ru/20180526/usu/kisspng-microsoft-sql-server-sql-server-management-studio-5b0a14557259a0.9917237415273872214684.jpg'
          alt='SQL Server'
        />
      ),
    },
    {
      title: 'Oracle database',
      description: 'Система управления базами данных компании Oracle',
      image: (
        <Avatar
          size={48}
          src='https://joeschmoe.io/api/v1/random'
          alt='Han Solo'
        />
      ),
    },
    {
      title: 'Oracle database',
      description: 'Система управления базами данных компании Oracle',
      image: (
        <Avatar
          size={48}
          src='https://joeschmoe.io/api/v1/random'
          alt='Han Solo'
        />
      ),
    },
  ];

  return (
    <Link to='/'>
      <Card
        title={content[0].title}
        bordered={true}
        hoverable
        style={{
          minWidth: 300,
          minHeight: 164,
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ padding: '0 10px 0 0' }}>{content[0].image}</div>
          <div>
            <span>{content[0].description}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default Service;
