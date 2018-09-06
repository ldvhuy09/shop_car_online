import { SELECT_OPTION, REQUEST_SEARCH_CARS, RECEIVE_SEARCH_CARS } from '../constants/action';
import sendToStore from './doAction';
import ProductApi from '../api/ProductApi';

const SearchAction = {
  selectOption: (field, value) => {
    return (dispatch) => {
      dispatch({
        type: SELECT_OPTION,
        payload: {
          field,
          value
        }
      })
    }
  },
  onSearch: (form, page) => {
    return (dispatch) => {
      sendToStore(dispatch,
        REQUEST_SEARCH_CARS,
        RECEIVE_SEARCH_CARS,
        ProductApi.onSearch(form, page)
      );
    }
  },
}

export default SearchAction;