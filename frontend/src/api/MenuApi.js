import { SERVER_BASE_URL, API_VER } from '../constants/config';
import {fetchApi} from './utils';

var queryFetchCategories = (field) => {
  return `${SERVER_BASE_URL}/${API_VER}/categories/${field}`;
}

const MenuApi = {
	fetch: () => {
		return new Promise((resolve, reject) => {
			var data = {}

			var fetchTypes = fetchApi(queryFetchCategories('types'));
			var fetchBrands = fetchApi(queryFetchCategories('brands'));

			Promise.all([fetchTypes, fetchBrands]).then(response => {
				data.types = response[0];
				data.brands = response[1];
				resolve(data);
			});
		})
	}
}

export default MenuApi;