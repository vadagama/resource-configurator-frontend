import { API } from './../api/api';

const ADD_CONFIG_TO_SAVED = 'ADD_CONFIG_TO_SAVED';
const DELETE_CONFIG_FROM_SAVED = 'DELETE_CONFIG_FROM_SAVED';

const initialState = {
  configuration: [],
  itemsCount: 0,
};

const savedConfigReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONFIG_TO_SAVED: {
      return {
        ...state,
        configuration: state.configuration,
        itemsCount: state.itemsCount,
      };
    }

    default:
      return state;
  }
};

// Action creators
export const addConfigToSavedAC = (payload) => ({
  type: ADD_CONFIG_TO_SAVED,
  payload,
});
export const deleteConfigFromSavedAC = (itemId) => ({
  type: DELETE_CONFIG_FROM_SAVED,
  itemId,
});

// Thunks (в данной версии не используются)
export const addConfigToSaved = (payload) => {
  return (dispatch) => {
    API.addConfigToSaved(payload).then((response) => {
      if (response) {
        debugger;
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

export default savedConfigReducer;
