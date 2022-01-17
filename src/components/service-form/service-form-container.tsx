import React from 'react';
import { connect } from 'react-redux';
import ServiceForm from './service-form';
import {
  toggleFormView,
  setFormViewStatus,
} from './../../redux/services-reducer';

const mapStateToProps = (store: any) => {
  return {
    isShowingForm: store.services.isShowingForm,
    currentFormServiceId: store.services.currentFormServiceId,
  };
};

const ServiceFormContainer = connect(mapStateToProps, {
  toggleFormView,
  setFormViewStatus,
})(ServiceForm);

export default ServiceFormContainer;
