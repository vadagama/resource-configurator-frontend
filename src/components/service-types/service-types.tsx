import React, { useState } from 'react';
import { Typography } from 'antd';
import { Card } from 'antd';
import { Row, Col, Layout } from 'antd';
import { Link } from 'react-router-dom';
import Service from '../service/service';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ServiceForm from '../service-form/service-form';

const { Title } = Typography;

const isShowingForm = false;

const ServiceTypes = () => {
  return (
    <>
      <Title level={4} style={{ paddingTop: 30, paddingBottom: 10 }}>
        {isShowingForm && (
          <Link to=''>
            <ArrowLeftOutlined style={{ padding: '0 10px 0 0' }} />
          </Link>
        )}
        Реляционные базы данных
      </Title>
      {!isShowingForm && (
        <div>
          <Row gutter={36} justify='start' style={{ paddingBottom: 40 }}>
            <Col span={8}>
              <Service />
            </Col>
            <Col span={8}>
              <Link to='/'>
                <Card
                  title='Microsoft SQL Server'
                  bordered={true}
                  style={{
                    minWidth: 300,
                    minHeight: 164,
                  }}
                >
                  <p>СУБД разработанная корпорацией Microsoft</p>
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to='/'>
                <Card
                  title='PostgreSQL'
                  bordered={true}
                  style={{ minWidth: 300, minHeight: 164 }}
                >
                  <p>Свободная система управления базами данных</p>
                </Card>
              </Link>
            </Col>
          </Row>

          <Row gutter={36} justify='start'>
            <Col span={8}>
              <Service />
            </Col>
            <Col span={8}>
              <Link to='/'>
                <Card
                  title='Microsoft SQL Server'
                  bordered={true}
                  style={{
                    minWidth: 300,
                    minHeight: 164,
                  }}
                >
                  <p>СУБД разработанная корпорацией Microsoft</p>
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to='/'>
                <Card
                  title='PostgreSQL'
                  bordered={true}
                  style={{ minWidth: 300, minHeight: 164 }}
                >
                  <p>Свободная система управления базами данных</p>
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      )}
      {isShowingForm && (
        <div style={{ backgroundColor: '#fff', padding: '40px' }}>
          <ServiceForm />
        </div>
      )}
    </>
  );
};

export default ServiceTypes;
