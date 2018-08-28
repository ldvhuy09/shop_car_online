import HomeReducer from './HomeReducer';
import DetailCarReducer from './DetailCarReducer';
import { redux, combineReducers } from 'redux';

const RootReducer = combineReducers ({HomeReducer, DetailCarReducer});

export default RootReducer;