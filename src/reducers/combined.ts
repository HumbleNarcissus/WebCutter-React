import { combineReducers } from 'redux';
import siteReducer from './sitesReducer';
import authReducer from './authReducer';

export default combineReducers({
    sites: siteReducer,
    auth: authReducer
});