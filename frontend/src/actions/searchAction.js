import { SELECT_OPTION, REQUEST_SEARCH_CARS, RECEIVE_SEARCH_CARS } from '../constants/action';
import sendToStore from './doAction';
import ProductApi from '../api/ProductApi';

const SearchAction = {
  onSearch: (queryObj) => {
    return (dispatch) => {
      sendToStore(dispatch,
        REQUEST_SEARCH_CARS,
        RECEIVE_SEARCH_CARS,
        ProductApi.search(queryObj)
      );
    }
  },
}

export default SearchAction;