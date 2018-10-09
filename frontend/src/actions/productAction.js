import { 
  REQUEST_TOPS_PRODUCT, 
  RECEIVE_TOPS_PRODUCT, 
  REQUEST_DETAIL_CAR, 
  RECEIVE_DETAIL_CAR,
  RECEIVE_SAME_TYPE_CARS,
  REQUEST_SAME_TYPE_CARS,
  REQUEST_SAME_BRAND_CARS,
  RECEIVE_SAME_BRAND_CARS,
  REQUEST_GALLERY_CAR,
  RECEIVE_GALLERY_CAR
} from '../constants/action';
import { 
  PAGE_DEFAULT,
	SIZE_PER_PAGE_DEFAULT,
	SIZE_PER_PAGE_DEFAULT_SAME_CATEGORY,
} from '../constants/api';
import sendToStore from './doAction';
import ProductApi from '../api/ProductApi';

const ProductAction = {
	fetchTops: () => {
		return (dispatch) => {
			sendToStore(dispatch,
				REQUEST_TOPS_PRODUCT,
				RECEIVE_TOPS_PRODUCT,
				ProductApi.fetchTops()
			);
		}
	},
	fetchDetail: (idCar) => {
		return (dispatch) => {
			sendToStore(dispatch,
				REQUEST_DETAIL_CAR,
				RECEIVE_DETAIL_CAR,
				ProductApi.fetchOne(idCar)
			);
		}
  },
  fetchSameTypeCars: (value, exceptId) => {
    return (dispatch) => {
      sendToStore(dispatch, 
        REQUEST_SAME_TYPE_CARS,
        RECEIVE_SAME_TYPE_CARS,
        ProductApi.search({
          type: value,
          size: SIZE_PER_PAGE_DEFAULT_SAME_CATEGORY,
          page: PAGE_DEFAULT,
          id: `!${exceptId}`
        })
      );
    }
  },

  fetchSameBrandCars: (value, exceptId) => {
    return (dispatch) => {
      sendToStore(dispatch, 
        REQUEST_SAME_BRAND_CARS,
        RECEIVE_SAME_BRAND_CARS,
        ProductApi.search({
          brand: value,
          size: SIZE_PER_PAGE_DEFAULT_SAME_CATEGORY,
          page: PAGE_DEFAULT,
          id: `!${exceptId}`
        })
      );
    }
  },

  fetchGalleryCar: (queryObj) => {
    return (dispatch) => {
      sendToStore(dispatch,
        REQUEST_GALLERY_CAR,
        RECEIVE_GALLERY_CAR,
        ProductApi.search(queryObj)
        )
    }
  }
};

export default ProductAction;