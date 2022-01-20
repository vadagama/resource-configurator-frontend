import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Space } from 'antd';
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Config = (props) => {
  console.log(props);
  let [itemsCount, setItemCount] = useState(props.itemsCount);

  useEffect(() => {
    props.setConfigAC();
  }, []);

  useEffect(() => {
    setItemCount(props.itemsCount);
  }, []);

  let exportFile = () => {
    console.log('exportFile');
  };

  let saveConfig = () => {
    console.log('saveConfig');
  };

  let createRequest = () => {
    console.log('createRequest');
  };

  let deleteItem = (event) => {
    props.deleteItemFromConfigAC(event);
  };

  const columns = [
    {
      title: 'Наименование ресурса',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Тип ресурса',
      dataIndex: 'service_type',
    },
    {
      title: 'Заголовок',
      dataIndex: 'title',
    },
    {
      title: 'Описание ресурса',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      id: 'id',
      render: (record) => (
        <Space size='middle'>
          <Button
            danger
            key={record.id}
            onClick={() => deleteItem(record.id)}
            type='primary'
            icon={<DeleteOutlined />}
          />
        </Space>
      ),
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
      {props.itemsCount > 0 ? (
        <Title level={3} style={{ padding: '20px 0 20px 0' }}>
          Моя конфигурация ({props.itemsCount})
        </Title>
      ) : (
        <Title level={3} style={{ padding: '20px 0 20px 0' }}>
          Моя конфигурация
        </Title>
      )}
      {props.itemsCount > 0 ? (
        <div>
          <Table
            columns={columns}
            dataSource={props.configuration}
            pagination={false}
            key={props.configuration.id}
            style={{
              padding: '0 0',
            }}
          />
          <div style={{ padding: '30px 32px 30px 0', textAlign: 'right' }}>
            <Space size={10}>
              <Button type='primary' onClick={exportFile}>
                Выгрузить в XLS
              </Button>
              <Button type='primary' onClick={exportFile}>
                Выгрузить в JSON
              </Button>
              <Button type='primary' onClick={createRequest}>
                Сформировать заявку
              </Button>
              <Button type='primary' onClick={saveConfig}>
                Сохранить
              </Button>
            </Space>
          </div>
        </div>
      ) : (
        <div style={{ padding: '0 0 30px 0' }}>
          Добавьте хотя бы один сервис
        </div>
      )}
    </div>
  );
};

export default Config;
