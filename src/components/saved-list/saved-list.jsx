import React, { useState, useEffect } from 'react';
import { Card, Avatar, Header } from 'antd';
import { Button } from 'antd';
import { Space } from 'antd';
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

const SavedList = (props) => {
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
    //props.getConfig();
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
      <Title level={3}>Сохраненные конфигурации</Title>
      {props.itemsCount > 0 ? (
        <div>
          <Table
            columns={columns}
            dataSource={props.saved}
            pagination={false}
            key={props.saved.id}
            style={{
              padding: '0 0',
            }}
          />
          <div style={{ padding: '30px 32px 30px 0', textAlign: 'right' }}>
            <Space size={10}>
              <Button type='primary' onClick={exportFile}>
                Выгрузить в xls
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

export default SavedList;
