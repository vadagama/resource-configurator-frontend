import { API } from './../api/api';

const ADD_CONFIG_TO_SAVED = 'ADD_CONFIG_TO_SAVED';
const DELETE_CONFIG_FROM_SAVED = 'DELETE_CONFIG_FROM_SAVED';
const GET_SAVED = 'GET_SAVED';
const SAVE_CONFIG = 'SAVE_CONFIG';

const initialState = {
  saved_configs: [],
  savedItemsCount: 0,
};

const savedConfigReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SAVED: {
      return {
        ...state,
        saved_configs: action.payload.data,
        savedItemsCount: action.payload.data.length,
      };
    }
    case ADD_CONFIG_TO_SAVED: {
      return {
        ...state,
        configuration: state.configuration,
        itemsCount: state.itemsCount,
      };
    }
    case DELETE_CONFIG_FROM_SAVED: {
      return {
        ...state,
        itemsCount: state.savedItemsCount,
        saved_configs: state.saved_configs.filter(
          (item) => item.id != action.itemId
        ),
      };
    }
    case SAVE_CONFIG: {
      return {
        ...state,
        ...state,
      };
    }
    default:
      return state;
  }
};

// Action creators

const getSavedAC = (payload) => ({
  type: GET_SAVED,
  payload,
});

export const addConfigToSavedAC = (payload) => ({
  type: ADD_CONFIG_TO_SAVED,
  payload,
});

export const deleteConfigFromSavedAC = (itemId) => ({
  type: DELETE_CONFIG_FROM_SAVED,
  itemId,
});

const saveConfigAC = (status) => ({
  type: SAVE_CONFIG,
  status,
});

// Thunks
export const getSaved = () => async (dispatch) => {
  let payload = await API.getSaved();
  if (payload) {
    dispatch(getSavedAC(payload));
  }
};

export const addConfigToSaved = (payload) => {
  return (dispatch) => {
    API.addConfigToSaved(payload).then((response) => {
      if (response) {
        dispatch(addConfigToSavedAC(payload));
      }
    });
  };
};

export const deleteConfigFromSaved = (itemId) => async (dispatch) => {
  let status = await API.deleteConfigFromSavedAC(itemId);
  if (status) {
    dispatch(deleteConfigFromSavedAC(itemId));
  }
};

export const saveConfig = (payload) => async (dispatch) => {
  let status = await API.saveConfig(payload);
  if (status) {
    dispatch(saveConfigAC(status));
  }
};

export default savedConfigReducer;
