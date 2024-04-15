import React, { useState, useEffect } from 'react';
import { Card, Avatar, Header } from 'antd';
import { Button } from 'antd';
import { Space } from 'antd';
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

const SavedList = (props) => {
  useEffect(() => {
    props.getSaved();
  }, []);

  let exportFile = () => {
    console.log('exportFile');
  };

  let saveConfig = () => {
    console.log('saveConfig');
  };

  let addToConfig = (items) => {
    console.log(items);
    props.addSavedItemToConfigAC(items);
  };

  let deleteItem = (id) => {
    props.deleteConfigFromSaved(id);
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
  ];
  return (
    <div>
      <Title
        style={{
          margin: '26px 16px 26px 16px',
        }}
        level={3}
      >
        Сохраненные конфигурации
      </Title>
      <div>
        {props.saved_configs.map((config) => {
          return (
            <div
              style={{
                backgroundColor: '#fff',
                padding: '0 24px',
                margin: '26px 16px 46px 16px',
              }}
            >
              <div>
                <Title
                  style={{
                    padding: '16px 8px',
                  }}
                  level={4}
                >
                  {config.created}
                </Title>
                <Table
                  size='small'
                  columns={columns}
                  dataSource={config.items}
                  pagination={false}
                  key={config.id}
                  style={{
                    padding: '0 0',
                  }}
                />
                <div
                  style={{ padding: '30px 32px 30px 0', textAlign: 'right' }}
                >
                  <Space size={10}>
                    <Button type='primary' onClick={exportFile}>
                      Выгрузить в XLS
                    </Button>
                    <Button type='primary' onClick={exportFile}>
                      Выгрузить в JSON
                    </Button>
                    <Button
                      type='primary'
                      danger
                      onClick={() => deleteItem(config.id)}
                    >
                      Удалить
                    </Button>
                    <Button
                      type='primary'
                      onClick={() => addToConfig(config.items)}
                    >
                      Добавить в конфигурацию
                    </Button>
                  </Space>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedList;
