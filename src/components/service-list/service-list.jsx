import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import ServiceContainer from '../service/service-container';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ServiceFormContainer from '../service-form/service-form-container';

const { Title } = Typography;

const ServiceList = (props) => {
  let [isShowingForm, setFormStatus] = useState(props.isShowingForm);
  let [currentMenuItem, setFCurrentMenuItem] = useState(props.currentMenuItem);

  useEffect(() => {
    props.getServiceList();
    props.getServiceTypes();
  }, []);

  useEffect(() => {
    setFormStatus(props.isShowingForm);
  }, [props.isShowingForm]);

  useEffect(() => {
    setFCurrentMenuItem(props.currentMenuItem);
  }, [props.currentMenuItem]);

  return (
    <>
      <div>
        {!isShowingForm && (
          <Title level={4} style={{ paddingBottom: 10 }}>
            {props.types
              .filter((type) => type.id == currentMenuItem)
              .map((filteredType) => (
                <div key={filteredType.id}>{filteredType.name}</div>
              ))}
          </Title>
        )}
        {isShowingForm && (
          <Title level={4} style={{ paddingBottom: 10 }}>
            {props.currentFormServiceId}
          </Title>
        )}

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
              <ServiceContainer props={services} key={services.id} />
            ))}
          </div>
        )}
      </div>

      {isShowingForm && (
        <div style={{ backgroundColor: '#fff', padding: '40px' }}>
          <ServiceFormContainer />
        </div>
      )}
    </>
  );
};

export default ServiceList;
