import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import servicesReducer from './services-reducer';
import configReducer from './config-reducer';

let reducers = combineReducers({
  services: servicesReducer,
  config: configReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
