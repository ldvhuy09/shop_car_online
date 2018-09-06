import {fetchApi} from './utils';
import ApiBuilder from './apiBuilder';
import { ID, NAME, TYPE, BRAND, DATE, PRICE } from '../constants/field';
import { OPERATOR_EXCEPT, OPERATOR_EQUAL, OPERATOR_GREATER, OPERATOR_LESS, OPERATOR_LIKE } from '../constants/operator';
import { SIZE_PER_PAGE_DEFAULT, PAGE_DEFAULT, EXCEPT_ID_DEFAULT,} from '../constants/api';

const apiBuilder = new ApiBuilder();

const ProductApi = {
	fetchTops: () => {
		return new Promise((resolve, reject) => {
			let data = {};

			let fetches = [
        fetchApi(apiBuilder.carsApi().setSize(8).setSort("numOfViews").build()),
        fetchApi(apiBuilder.carsApi().setSize(8).setSort("numOfSales").build()),
        fetchApi(apiBuilder.carsApi().setSize(8).setSort("storeDate").build()),
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

			fetchApi(apiBuilder.oneCarApi().with(idCar).build()).then(response => {
				data.car = response;
				resolve(data);
			}, error => {reject(error)});
		})
  },
  
  fetchBy: (field, value, sizePerPage = SIZE_PER_PAGE_DEFAULT, page = PAGE_DEFAULT, exceptId = EXCEPT_ID_DEFAULT) => {
    return new Promise((resolve, reject) => {
      let data = {
        cars: [],
	      totalPages: 0,
				page: 0,
      };
      fetchApi(apiBuilder
        .advanceSearchApi()
        .with(field, OPERATOR_EQUAL, value)
        .with(ID, OPERATOR_EXCEPT, exceptId)
        .setSize(sizePerPage)
        .setPage(page)
        .build()).then(response => {
        data.cars = response.content;
        data.totalPages = response.totalPages;
        data.page = 1 + response.number;
        resolve(data);
      }, error => {reject(error)});
    })
  },
  onSearch: (form, page = PAGE_DEFAULT) => {
    return new Promise((resolve, reject) => {
      let data = {
        cars: [],
	      totalPages: 0,
				page: 0,
      }
      fetchApi(apiBuilder
        .advanceSearchApi()
        .with(NAME, OPERATOR_LIKE, form.name)
        .with(TYPE, OPERATOR_EQUAL, form.type)
        .with(BRAND, OPERATOR_EQUAL, form.brand)
        .with(DATE, OPERATOR_GREATER, form.fromDate)
        .with(DATE, OPERATOR_LESS, form.toDate)
        .with(PRICE, OPERATOR_GREATER, form.minPrice)
        .build()
      ).then(response => {
        data.cars = response.content;
        data.totalPages = response.totalPages;
        data.page = 1 + response.number;
        resolve(data);
      }, error => {reject(error)})
    })
  }
};

export default ProductApi;