import React from 'react';
import { connect } from 'react-redux';
import ServiceList from './service-list';
import {
  getServiceList,
  getServiceTypes,
  setFormViewStatus,
} from './../../redux/services-reducer';

const mapStateToProps = (store) => {
  return {
    services: store.services.services,
    types: store.services.types,
    isShowingForm: store.services.isShowingForm,
    currentFormServiceId: store.services.currentFormServiceId,
    currentMenuItem: store.services.currentMenuItem,
  };
};

const ServiceListContainer = connect(mapStateToProps, {
  getServiceList,
  getServiceTypes,
  setFormViewStatus,
})(ServiceList);

export default ServiceListContainer;
