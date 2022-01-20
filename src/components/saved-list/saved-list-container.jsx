import React from 'react';
import { connect } from 'react-redux';
import SavedList from './saved-list';
import {
  getSaved,
  addConfigToSaved,
  deleteConfigFromSaved,
} from './../../redux/saved-configs-reducer';

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
})(SavedList);

export default SavedListContainer;
