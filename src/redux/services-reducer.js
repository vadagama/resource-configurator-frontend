import { API } from './../api/api';

const GET_SERVICE_TYPES = 'GET_SERVICE_TYPES';
const GET_SERVICE_LIST = 'GET_SERVICE_LIST';
const TOGGLE_FORM_VIEW = 'TOGGLE_FORM_VIEW';
const SET_FORM_VIEW_STATUS = 'SET_FORM_VIEW_STATUS';
const FILTER_SERVICES_BY_TYPE = 'FILTER_SERVICES_BY_TYPE';
const SET_CURRENT_MENU_ITEM = 'SET_CURRENT_MENU_ITEM';

const initialState = {
  types: [{ id: null, name: null }],
  services: [
    {
      id: null,
      type: null,
      title: null,
      description: null,
      image: null,
    },
  ],
  isShowingForm: false,
  currentFormServiceId: null,
  isSearchVisible: true,
  currentMenuItem: 1,
};

const servicesReducer = (state = initialState, action) => {
    let stateCopy
  switch (action.type) {
    case GET_SERVICE_LIST: {
      return { ...state, services: action.payload.data };
    }
    case GET_SERVICE_TYPES: {
      return { ...state, types: action.payload.data };
    }
    case TOGGLE_FORM_VIEW: {
      return {
        ...state,
        isShowingForm: action.payload.isShowingForm,
        currentFormServiceId: action.payload.currentFormServiceId,
      };
    }
    case SET_FORM_VIEW_STATUS: {
      return {
        ...state,
        isShowingForm: action.isShowingForm,
      };
    }
    case FILTER_SERVICES_BY_TYPE: {
      return { ...state, services: action.payload.data };
    }
    case SET_CURRENT_MENU_ITEM: {
      return { ...state, currentMenuItem: action.currentMenuItem };
    }
    default:
      return state;
  }
};

// Action creators
const getServiceListAC = (payload) => ({ type: GET_SERVICE_LIST, payload });
const getServiceTypesAC = (payload) => ({ type: GET_SERVICE_TYPES, payload });
export const toggleFormView = (payload) => ({
  type: TOGGLE_FORM_VIEW,
  payload,
});
export const setFormViewStatus = (status) => ({
  type: SET_FORM_VIEW_STATUS,
  status,
});
export const filterServicesByTypeAC = (payload) => ({
  type: FILTER_SERVICES_BY_TYPE,
  payload,
});
export const setCurrentMenuItem = (currentMenuItem) => ({
  type: SET_CURRENT_MENU_ITEM,
  currentMenuItem,
});

// Thunks
export const getServiceList = () => {
  return (dispatch) => {
    API.getServices().then((data) => {
      if (data) {
        dispatch(getServiceListAC(data));
      }
    });
  };
};

export const getServiceListFilteredByType = (id) => {
  return (dispatch) => {
    API.getServicesFilteredByType(id).then((data) => {
      if (data) {
        dispatch(filterServicesByTypeAC(data));
      }
    });
  };
};

export const getServiceTypes = () => {
  return (dispatch) => {
    API.getServiceTypes().then((data) => {
      if (data) {
        dispatch(getServiceTypesAC(data));
      }
    });
  };
};

export default servicesReducer;
