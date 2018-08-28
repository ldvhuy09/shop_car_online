import {
	REQUEST_DETAIL_CAR,
  RECEIVE_DETAIL_CAR,
  REQUEST_SAME_TYPE_CARS,
  RECEIVE_SAME_TYPE_CARS,
  REQUEST_SAME_BRAND_CARS,
  RECEIVE_SAME_BRAND_CARS
} from '../constants/action';

const stateInit = {
  car: {},
  sameTypeCars: [],
  sameBrandCars: []
}

const DetailCarReducer = (state = stateInit, action) => {
	switch (action.type) {
		case REQUEST_DETAIL_CAR:
			return {
				... state,
			}

		case RECEIVE_DETAIL_CAR:
			return {
				...state,
				car: action.payload.data.car
      }
    
    case REQUEST_SAME_TYPE_CARS:
      return {
        ... state
      }
    
    case RECEIVE_SAME_TYPE_CARS:
      return {
        ... state, 
        sameTypeCars: action.payload.data.cars
      }

    case REQUEST_SAME_BRAND_CARS:
      return {
        ... state
      }
    
    case RECEIVE_SAME_BRAND_CARS:
      return {
        ... state, 
        sameBrandCars: action.payload.data.cars
      }

		default:
			return state;
	}
}

export default DetailCarReducer;