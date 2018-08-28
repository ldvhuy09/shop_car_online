import { 
	REQUEST_MENU, 
	RECEIVE_MENU, 
	REQUEST_TOPS_PRODUCT,			
	RECEIVE_TOPS_PRODUCT,
	REQUEST_TOP_VIEW_CARS,
	RECEIVE_TOP_VIEW_CARS,
	REQUEST_TOP_NEW_CARS,
	RECEIVE_TOP_NEW_CARS,
	REQUEST_DETAIL_PRODUCT,
	RECEIVE_DETAIL_PRODUCT
} from '../constants/action';

const stateInit = {
	menu: {},
	topSellerCars: [],
	topViewCars: [],
	topNewCars: []
}

const HomeReducer = (state = stateInit, action) => {
	switch (action.type) {
		case REQUEST_MENU:
			return {
				... state,
				menu: []
			}
		case RECEIVE_MENU:
			return {
				...state,
				menu: action.payload.data
			}

		case REQUEST_TOPS_PRODUCT:
			return {
				... state,
				topSellerCars: [],
				topViewCars: [],
				topNewCars: []
			}
		case RECEIVE_TOPS_PRODUCT:
			return {
				...state,
				topSellerCars: action.payload.data.topSellerCars,
				topViewCars: action.payload.data.topViewCars,
				topNewCars: action.payload.data.topNewCars
			}
		default:
			return state;			
	}
};

export default HomeReducer;