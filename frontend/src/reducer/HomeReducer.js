import {
	REQUEST_TOPS_PRODUCT,			
	RECEIVE_TOPS_PRODUCT,
} from '../constants/action';

const stateInit = {
	topSellerCars: [],
	topViewCars: [],
	topNewCars: []
}

const HomeReducer = (state = stateInit, action) => {
	switch (action.type) {
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