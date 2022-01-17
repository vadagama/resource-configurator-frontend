import React from 'react';
import { connect } from 'react-redux';
import LeftMenu from './left-menu';
import {
  getServiceTypes,
  getServiceListFilteredByType,
  getServiceList,
  setCurrentMenuItem,
} from './../../redux/services-reducer';

const mapStateToProps = (store: any) => {
  return {
    types: store.services.types,
  };
};

const LeftMenuContatiner = connect(mapStateToProps, {
  getServiceTypes,
  getServiceListFilteredByType,
  getServiceList,
  setCurrentMenuItem,
})(LeftMenu);

export default LeftMenuContatiner;
