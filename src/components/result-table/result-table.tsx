import React from 'react';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Space } from 'antd';
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const ResultTable = () => {
  const columns = [
    {
      title: 'Наименование ресурса',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Тип ресурса',
      dataIndex: 'type',
    },
    {
      title: 'Описание ресурса',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size='middle'>
          <Button danger type='primary' icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  interface DataType {
    key: React.Key;
    name: string;
    type: string;
    description: string;
  }

  const data: DataType[] = [
    {
      key: '1',
      name: 'asmd-core',
      type: 'Вычисления',
      description:
        '4 ядра CPU, 4ГБ RAM, OS Ubuntu 20.04 LTS, Загрузочный диск 40ГБ SSD, дополнительный размер диска 500ГБ HDD',
    },
    {
      key: '2',
      name: 'asmd-db',
      type: 'Базы данных',
      description: 'Oracle Database 10.04',
    },
    {
      key: '3',
      name: 'asmd-etl-kafka',
      type: 'Вычисления',
      description:
        '4 ядра CPU, 4ГБ RAM, OS Ubuntu 20.04 LTS, Загрузочный диск 40ГБ SSD, дополнительный размер диска 500ГБ HDD',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '0 24px',
        margin: '26px 16px 46px 16px',
      }}
    >
      <Title level={3} style={{ padding: '20px 0 20px 0' }}>
        Моя конфигурация
      </Title>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        style={{
          padding: '0 0',
        }}
      />
      <div style={{ padding: '30px 32px 30px 0', textAlign: 'right' }}>
        <Space size={10}>
          <Button type='primary'>Выгрузить в xls</Button>
          <Button type='primary'>Сформировать заявку</Button>
          <Button type='primary'>Сохранить</Button>
        </Space>
      </div>
    </div>
  );
};

export default ResultTable;
