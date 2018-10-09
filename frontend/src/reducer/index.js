import CategoryReducer from './CategoryReducer';
import HomeReducer from './HomeReducer';
import DetailCarReducer from './DetailCarReducer';
import GalleryCarReducer from './GalleryCarReducer';
import SearchFormReducer from './SearchFormReducer';
import AuthenticationReducer from './AuthenticationReducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers ({
        CategoryReducer, 
        HomeReducer, 
        DetailCarReducer, 
        GalleryCarReducer, 
        SearchFormReducer, 
        AuthenticationReducer
    });

export default RootReducer;