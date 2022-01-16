import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import Service from '../service/service';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ServiceForm from '../service-form/service-form';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

const { Title } = Typography;

const isShowingForm = false;

const ServiceList = (props) => {
  //let [services, getServices] = useState(props.services);
  // let [types, getServiceTypes] = useState(props.types);

  useEffect(() => {
    props.getServices();
    props.getServiceTypes();
  }, []);

  const clearList = () => {
    console.log('Очистить список');
  };

  // let handleClick = () => {
  //   props.getServices();
  //   props.getServiceTypes();
  // };

  return (
    <>
      {/* {props.types.map((type) => (
        <div key={type.id}>
          <Title level={4} style={{ paddingTop: 30, paddingBottom: 10 }}>
            {isShowingForm && (
              <Link to=''>
                <ArrowLeftOutlined style={{ padding: '0 10px 0 0' }} />
              </Link>
            )}

            {type.name}
          </Title>
          {!isShowingForm && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridColumnGap: '20px',
                gridRowGap: '20px',
              }}
            >
              {props.services
                .filter((service) => service.type === type.id)
                .map((filteredService) => (
                  <Service key={filteredService.id} props={filteredService} />
                ))}
            </div>
          )}
        </div>
      ))} */}
      <div>
        <Title level={4} style={{ paddingTop: 30, paddingBottom: 10 }}>
          {isShowingForm && (
            <Link to=''>
              <ArrowLeftOutlined style={{ padding: '0 10px 0 0' }} />
            </Link>
          )}
          Все сервисы
        </Title>
        {!isShowingForm && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridColumnGap: '20px',
              gridRowGap: '20px',
            }}
          >
            {props.services.map((services) => (
              <Service props={services} key={services.id} />
            ))}
          </div>
        )}
      </div>

      {isShowingForm && (
        <div style={{ backgroundColor: '#fff', padding: '40px' }}>
          <ServiceForm />
        </div>
      )}
    </>
  );
};

export default ServiceList;
