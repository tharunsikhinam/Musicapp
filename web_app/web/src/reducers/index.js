import {combineReducers} from 'redux';
import courses from './courseReducers';
//defining a root reducer.. mandatory.. as more reducers add up .. combine them here
const rootReducer = combineReducers({courses});

export default rootReducer;
