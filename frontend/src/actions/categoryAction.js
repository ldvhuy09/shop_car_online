import CategoryApi from '../api/CategoryApi';
import sendToStore from './doAction';
import {
  REQUEST_TYPES, 
  RECEIVE_TYPES, 
  REQUEST_BRANDS,
  RECEIVE_BRANDS,
} from '../constants/action';

var CategoryAction = {
	fetchTypes: () => {
		return (dispatch) => {
			sendToStore(dispatch,
        REQUEST_TYPES, 
        RECEIVE_TYPES, 
				CategoryApi.fetch('type')
			)
		}
	},
	fetchBrands: () => {
		return (dispatch) => {
			sendToStore(dispatch,
        REQUEST_BRANDS,
        RECEIVE_BRANDS, 
				CategoryApi.fetch('brand')
			)
		}
	}
};

export default CategoryAction;