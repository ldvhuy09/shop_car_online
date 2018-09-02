import { 
	REQUEST_TYPES, 
  RECEIVE_TYPES, 
  REQUEST_BRANDS,
  RECEIVE_BRANDS,
} from '../constants/action';


const stateInit = {
  types: [],
  brands: []
};

const CategoryReducer = (state = stateInit, action) => {
  switch(action.type) {
    case REQUEST_TYPES:
      return {
        ...state,
        types: []
      } 
    case RECEIVE_TYPES:
      return {
        ...state,
        types: action.payload.data
      } 
    case REQUEST_BRANDS:
      return {
        ...state,
        brands: []
      }
    case RECEIVE_BRANDS:
      return {
        ...state,
        brands: action.payload.data
      }
    default: 
      return state;
  }
};

export default CategoryReducer;
