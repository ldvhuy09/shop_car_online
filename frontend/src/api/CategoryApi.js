import { SERVER_BASE_URL, API_VER } from '../constants/config';
import {fetchApi} from './utils';

const apiFetchCategories = (field) => {
  return `${SERVER_BASE_URL}/${API_VER}/categories/${field}`;
}

const CategoryApi = {
	fetch: (field) => {
		return new Promise((resolve, reject) => {
			fetchApi(apiFetchCategories(field)).then(response => {
        resolve(response)
      }, error => {reject(error)});
		})
	}
}

export default CategoryApi;