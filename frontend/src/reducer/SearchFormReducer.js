import {
  ON_SUBMIT,
  SELECT_OPTION,
  REQUEST_SEARCH_CARS,
  RECEIVE_SEARCH_CARS
} from '../constants/action';

const stateInit = {
  result: {
    cars: null,
    page: 0,
    totalPages: 0,
  },
}

const SearchFormReducer = (state = stateInit, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_CARS: 
      return {
        ...state,
        result: {
          ...state.result,
          cars: [],
        }
      }
      
    case RECEIVE_SEARCH_CARS:
      return {
        ...state,
        result: {
          ...state.result,
          cars: action.payload.data.cars,
          page: action.payload.data.page,
          totalPages: action.payload.data.totalPages,
        }
      }
    default:
      return state;
  }
}

export default SearchFormReducer;