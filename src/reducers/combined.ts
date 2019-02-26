import { combineReducers } from 'redux';
import siteReducer from './sitesReducer';

export default combineReducers({
    sites: siteReducer
});