import React from 'react';
import { connect } from 'react-redux';
import ServiceList from './service-list';
import { getServices } from './../../redux/services-reducer';
import { getServiceTypes } from './../../redux/services-reducer';

const mapStateToProps = (store) => {
  return {
    services: store.services.services,
    types: store.services.types,
  };
};

const ServiceListContainer = connect(mapStateToProps, {
  getServices,
  getServiceTypes,
})(ServiceList);

export default ServiceListContainer;
