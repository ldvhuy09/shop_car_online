import CategoryReducer from './CategoryReducer';
import HomeReducer from './HomeReducer';
import DetailCarReducer from './DetailCarReducer';
import GalleryCarReducer from './GalleryCarReducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers ({CategoryReducer, HomeReducer, DetailCarReducer, GalleryCarReducer});

export default RootReducer;