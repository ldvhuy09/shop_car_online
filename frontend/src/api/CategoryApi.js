import {fetchApi} from './utils';
import ApiBuilder from './apiBuilder';

const apiBuilder = new ApiBuilder();

const CategoryApi = {
	fetch: (field) => {
		return new Promise((resolve, reject) => {
			fetchApi(apiBuilder.categoryApi().with(field).build()).then(response => {
        resolve(response)
      }, error => {reject(error)});
		})
	}
}

export default CategoryApi;