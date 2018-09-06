import {
	REQUEST_GALLERY_CAR,
	RECEIVE_GALLERY_CAR
} from '../constants/action';

const stateInit = {
  cars: [],
  page: 0,
  totalPages: 0,
};

const GalleryCarReducer = (state = stateInit, action) => {
	switch (action.type) {
		case REQUEST_GALLERY_CAR:
			return {
				... state,
				cars: [],
			};
		case RECEIVE_GALLERY_CAR:
			return {
				... state,
				cars: action.payload.data.cars,
				page: action.payload.data.page,
				totalPages: action.payload.data.totalPages,
			};
		default:
			return state;
	}
};

export default GalleryCarReducer;