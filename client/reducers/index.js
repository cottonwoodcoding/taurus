import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth'
import flash from './flash';
import serviceCategories from './serviceCategories';

const rootReducer = combineReducers({ 
  routing: routerReducer, 
  auth, 
  flash,
  serviceCategories
});

export default rootReducer;
