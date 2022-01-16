import React from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import ServiceFrom from '../service-form/service-form';

const Service = (props) => {
  const handleClick = (event) => {
    console.log(event.currentTarget.id);
    return <ServiceFrom />;
  };

  return (
    <div>
      <Link to='/'>
        <Card
          id={props.props.id}
          title={props.props.title}
          bordered={true}
          onClick={handleClick}
          hoverable
          style={{
            minWidth: 300,
            minHeight: 164,
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ padding: '0 10px 0 0' }}>
              <Avatar shape='square' size={48} src={props.props.image} />
            </div>
            <div>
              <span>{props.props.description}</span>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default Service;
