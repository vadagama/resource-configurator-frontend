import React from 'react';
import { connect } from 'react-redux';
import Config from './config';
import {
  setConfigAC,
  deleteItemFromConfigAC,
} from '../../redux/config-reducer';

const mapStateToProps = (store) => {
  return {
    itemsCount: store.config.itemsCount,
    configuration: store.config.configuration,
  };
};

const ConfigContainer = connect(mapStateToProps, {
  setConfigAC,
  deleteItemFromConfigAC,
})(Config);

export default ConfigContainer;
