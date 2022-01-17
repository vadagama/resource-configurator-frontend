import React from 'react';
import { connect } from 'react-redux';
import Service from './service';
import { toggleFormView } from './../../redux/services-reducer';

const mapStateToProps = (store) => {
  return {
    isShowingForm: store.services.isShowingForm,
    currentFormServiceId: store.services.currentFormServiceId,
  };
};

const ServiceContainer = connect(mapStateToProps, {
  toggleFormView,
})(Service);

export default ServiceContainer;
