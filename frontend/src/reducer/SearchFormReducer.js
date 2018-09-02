import {
  SELECT_OPTION
} from '../constants/action';

const stateInit = {
  type: '',
  brand: '',
  fromDate: '',
  toDate: '',
  minPrice: 0,
  maxPrice: 1000000000
}

const SearchFormReducer = (state = stateInit, action) => {
  switch (action.type) {
    case SELECT_OPTION:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }  
    default:
      return state;
  }
}