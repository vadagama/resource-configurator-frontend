import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import servicesReducer from './services-reducer';

let reducers = combineReducers({
  services: servicesReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
