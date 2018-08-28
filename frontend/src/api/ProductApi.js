import { SERVER_BASE_URL, API_VER } from '../constants/config';
import {fetchApi} from './utils';

var queryFetchTop = (field, size = 8, order='DESC') => {
  return `${SERVER_BASE_URL}/${API_VER}/cars?size=${size}&sort=${field},${order}`;
}

var queryFetchOne = (id) => {
  return `${SERVER_BASE_URL}/${API_VER}/cars/${id}`
}

var queryFetchBy = (field, value, size, id = 0) => {
  return `${SERVER_BASE_URL}/${API_VER}/cars/search?size=${size}&search=${field}:${value},id!${id}`;
}

const ProductApi = {
	fetchTops: () => {
		return new Promise((resolve, reject) => {
			var data = {};

			var fetchs = [
				fetchApi(queryFetchTop("numOfViews")),
				fetchApi(queryFetchTop("numOfSales")),
        fetchApi(queryFetchTop("storeDate"))
      ]

			Promise.all(fetchs).then(responses => {
				data.topSellerCars = responses[0].content;
				data.topViewCars = responses[1].content;
				data.topNewCars = responses[2].content;
				resolve(data);
			}, error => {reject(error)})
		})
	},

	fetchOne: (idCar) => {
		return new Promise((resolve, reject) => {
			var data = {}

			fetchApi(queryFetchOne(idCar)).then(response => {
				data.car = response;
				resolve(data);
			}, error => {reject(error)});
		})
  },
  
  fetchBy: (field, value, size = 8, idCar = 0) => {
    return new Promise((resolve, reject) => {
      var data = {
        cars: []
      }
      
      fetchApi(queryFetchBy(field, value, size, idCar))
      .then(response => {
        data.cars = response.content;
        resolve(data);
      }, error => {reject(error)});
    })
  }
}

export default ProductApi;