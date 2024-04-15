import React from 'react';
import { connect } from 'react-redux';
import ServiceForm from './service-form';
import {
  toggleFormView,
  setFormViewStatus,
} from '../../redux/services-reducer';
import { addItemToConfigAC, getConfig } from '../../redux/config-reducer';

const mapStateToProps = (store) => {
  return {
    isShowingForm: store.services.isShowingForm,
    currentFormServiceId: store.services.currentFormServiceId,
    currentMenuItem: store.services.currentMenuItem,
  };
};

const ServiceFormContainer = connect(mapStateToProps, {
  toggleFormView,
  setFormViewStatus,
  addItemToConfigAC,
  getConfig,
})(ServiceForm);

export default ServiceFormContainer;
