import { API } from './../api/api';

const ADD_CONFIG_TO_SAVED = 'ADD_CONFIG_TO_SAVED';
const DELETE_CONFIG_FROM_SAVED = 'DELETE_CONFIG_FROM_SAVED';
const GET_SAVED = 'GET_SAVED';

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
          (item) => item.id != action.item
        ),
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

export const deleteConfigFromSavedAC = (item) => ({
  type: DELETE_CONFIG_FROM_SAVED,
  item,
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
