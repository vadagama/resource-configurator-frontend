import React from 'react';
import { connect } from 'react-redux';
import ScenariosList from './scenarios-list';
import {
  getSaved,
  addConfigToSaved,
  deleteConfigFromSaved,
} from './../../redux/saved-configs-reducer';
import { addSavedItemToConfigAC } from './../../redux/config-reducer';

const mapStateToProps = (store) => {
  return {
    saved_configs: store.saved_configs.saved_configs,
    savedItemsCount: store.saved_configs.savedItemsCount,
  };
};

const SavedListContainer = connect(mapStateToProps, {
  getSaved,
  addConfigToSaved,
  deleteConfigFromSaved,
  addSavedItemToConfigAC,
})(ScenariosList);

export default SavedListContainer;
