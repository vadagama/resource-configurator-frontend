import React from 'react';
import { connect } from 'react-redux';
import FastSearch from './fast-search';
import {
  getServiceTypes,
  getServiceListFilteredByType,
  getServiceList,
} from './../../redux/services-reducer';

const mapStateToProps = (store: any) => {
  return {
    types: store.services.types,
  };
};

const FastSearchContatiner = connect(mapStateToProps, {
  getServiceTypes,
  getServiceListFilteredByType,
  getServiceList,
})(FastSearch);

export default FastSearchContatiner;
