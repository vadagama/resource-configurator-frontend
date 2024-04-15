import { API } from './../api/api';

const SET_CONFIG = 'SET_CONFIG';
const ADD_ITEM_TO_CONFIG = 'ADD_ITEM_TO_CONFIG';
const DELETE_ITEM_FROM_CONFIG = 'DELETE_ITEM_FROM_CONFIG';
const CLEAR_CONFIG = 'CLEAR_CONFIG';
const ADD_SAVED_ITEM_TO_CONFIG = 'ADD_SAVED_ITEM_TO_CONFIG';

const initialState = {
  configuration: [],
  itemsCount: 0,
};

const configReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case SET_CONFIG: {
      return {
        ...state,
        configuration: state.configuration,
        itemsCount: state.itemsCount,
      };
    }
    case ADD_ITEM_TO_CONFIG: {
      return {
        ...state,
        configuration: [...state.configuration, action.payload],
        itemsCount: state.itemsCount + 1,
      };
    }
    case DELETE_ITEM_FROM_CONFIG: {
      stateCopy = {
        ...state,
        configuration: state.configuration.filter(
          (item) => item.id != action.itemId
        ),
        itemsCount: state.itemsCount - 1,
      };
      return stateCopy;
    }
    case CLEAR_CONFIG: {
      return {
        ...state,
        ...initialState,
      };
    }
    case ADD_SAVED_ITEM_TO_CONFIG: {
      return {
        ...state,
        configuration: action.payload,
        itemsCount: action.payload.length,
      };
    }
    default:
      return state;
  }
};

// Action creators
export const setConfigAC = () => ({ type: SET_CONFIG });
export const addItemToConfigAC = (payload) => ({
  type: ADD_ITEM_TO_CONFIG,
  payload,
});
export const deleteItemFromConfigAC = (itemId) => ({
  type: DELETE_ITEM_FROM_CONFIG,
  itemId,
});

export const clearConfigAC = () => ({ type: CLEAR_CONFIG });
export const addSavedItemToConfigAC = (payload) => ({
  type: ADD_SAVED_ITEM_TO_CONFIG,
  payload,
});

// Thunks (в данной версии не используются)
export const getConfig = () => async (dispatch) => {
  let payload = await API.getConfig();
  if (payload) {
    dispatch(setConfigAC(payload));
  }
};

export const addItemToConfig = (payload) => {
  return (dispatch) => {
    API.addItemToConfig(payload).then((response) => {
      if (response) {
        debugger;
        dispatch(addItemToConfigAC(payload));
      }
    });
  };
};

export const deleteItemFromConfig = (itemId) => async (dispatch) => {
  let status = await API.deleteItemFromConfig(itemId);
  if (status) {
    dispatch(deleteItemFromConfigAC(itemId));
  }
};

export default configReducer;
