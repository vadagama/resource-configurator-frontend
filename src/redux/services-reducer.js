import { API } from './../api/api';

const GET_SERVICE_TYPES = 'GET_SERVICE_TYPES';
const GET_SERVICES = 'SET_SERVICES';

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
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES: {
      return { ...state, services: action.payload.data };
    }
    case GET_SERVICE_TYPES: {
      return { ...state, types: action.payload.data };
    }
    default:
      return state;
  }
};

const getServicesAC = (payload) => ({ type: GET_SERVICES, payload });
const getServiceTypesAC = (payload) => ({ type: GET_SERVICE_TYPES, payload });

export const getServices = () => {
  return (dispatch) => {
    API.getServices().then((data) => {
      if (data) {
        dispatch(getServicesAC(data));
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
