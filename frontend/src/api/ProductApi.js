import { SERVER_BASE_URL, API_VER } from '../constants/config';
import {fetchApi} from './utils';

const BASE_URL_API = `${SERVER_BASE_URL}/${API_VER}`;

const apiFetchTop = (field, size = 8, order = 'DESC') =>
	`${BASE_URL_API}/cars?size=${size}&sort=${field},${order}`;

const apiFetchOne = (id) => `${BASE_URL_API}/cars/${id}`;

const apiFetchBy = (field, value, sizePerPage, page, exceptId) =>
	`${BASE_URL_API}/cars/search?search=${field}:${value},id!${exceptId}&size=${sizePerPage}&page=${page}`;

const ProductApi = {
	fetchTops: () => {
		return new Promise((resolve, reject) => {
			let data = {};

			let fetches = [
				fetchApi(apiFetchTop("numOfViews")),
				fetchApi(apiFetchTop("numOfSales")),
        fetchApi(apiFetchTop("storeDate"))
      ];

			Promise.all(fetches).then(responses => {
				data.topSellerCars = responses[0].content;
				data.topViewCars = responses[1].content;
				data.topNewCars = responses[2].content;
				resolve(data);
			}, error => {reject(error)})
		})
	},

	fetchOne: (idCar) => {
		return new Promise((resolve, reject) => {
			let data = {};

			fetchApi(apiFetchOne(idCar)).then(response => {
				data.car = response;
				resolve(data);
			}, error => {reject(error)});
		})
  },
  
  fetchBy: (field, value, sizePerPage = 8, page = 1, exceptId = 0) => {
    return new Promise((resolve, reject) => {
      let data = {
        cars: [],
	      totalPages: 0,
				page: 0,
      };
      
      fetchApi(apiFetchBy(field, value, sizePerPage, page, exceptId))
      .then(response => {
        data.cars = response.content;
        data.totalPages = response.totalPages;
        data.page = 1 + response.number;
        resolve(data);
      }, error => {reject(error)});
    })
  }
};

export default ProductApi;