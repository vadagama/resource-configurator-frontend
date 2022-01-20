import React from 'react';
import { connect } from 'react-redux';
import Config from './config';
import {
  setConfigAC,
  deleteItemFromConfigAC,
  clearConfigAC,
} from '../../redux/config-reducer';

import { saveConfig } from '../../redux/saved-configs-reducer';

const mapStateToProps = (store) => {
  return {
    itemsCount: store.config.itemsCount,
    configuration: store.config.configuration,
  };
};

const ConfigContainer = connect(mapStateToProps, {
  setConfigAC,
  deleteItemFromConfigAC,
  saveConfig,
  clearConfigAC,
})(Config);

export default ConfigContainer;
