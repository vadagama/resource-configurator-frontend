import { API } from './../api/api';

const SET_CONFIG = 'SET_CONFIG';
const ADD_ITEM_TO_CONFIG = 'ADD_ITEM_TO_CONFIG';
const DELETE_ITEM_FROM_CONFIG = 'DELETE_ITEM_FROM_CONFIG';

const initialState = {
  configuration: [
    {
      key: 1,
      service_type: 'asmd-core',
      type: 1,
      description:
        '4 ядра CPU, 4ГБ RAM, OS Ubuntu 20.04 LTS, Загрузочный диск 40ГБ SSD, дополнительный размер диска 500ГБ HDD',
      title: 'Oracle database',
    },
  ],
  isTableNotEmpty: true,
  itemsCount: 1,
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIG: {
      return { ...state, configuration: action.payload.data };
    }
    case ADD_ITEM_TO_CONFIG: {
      return { ...state, types: action.payload.data };
    }
    case DELETE_ITEM_FROM_CONFIG: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

// Action creators
const setConfigAC = (payload) => ({ type: SET_CONFIG, payload });
const addItemToConfigAC = (response) => ({
  type: ADD_ITEM_TO_CONFIG,
  response,
});
const deleteItemFromConfigAC = (status) => ({
  type: DELETE_ITEM_FROM_CONFIG,
  status,
});

// Thunks
export const getConfig = () => {
  return (dispatch) => {
    API.getConfig().then((payload) => {
      if (payload) {
        dispatch(setConfigAC(payload));
      }
    });
  };
};

export const addItemToConfig = (payload) => {
  return (dispatch) => {
    API.addItemToConfig(payload).then((response) => {
      if (response) {
        dispatch(addItemToConfigAC(response));
      }
    });
  };
};

export const deleteItemFromConfig = (itemId) => {
  return (dispatch) => {
    API.deleteItemFromConfig(itemId).then((status) => {
      if (status) {
        dispatch(deleteItemFromConfigAC(status));
      }
    });
  };
};

export default configReducer;
