import React from 'react';
import { connect } from 'react-redux';
import Config from './config';
import { getConfig, deleteItemFromConfig } from '../../redux/config-reducer';

const mapStateToProps = (store) => {
  return {
    isTableNotEmpty: store.config.isTableNotEmpty,
    itemsCount: store.config.itemsCount,
    configuration: store.config.configuration,
  };
};

const ConfigContainer = connect(mapStateToProps, {
  getConfig,
  deleteItemFromConfig,
})(Config);

export default ConfigContainer;
