import { SERVER_BASE_URL, API_VER } from '../constants/config';
import { PAGE_DEFAULT, SIZE_PER_PAGE_DEFAULT} from '../constants/api';

const BASE_URL_API = `${SERVER_BASE_URL}/${API_VER}`;

var CategoryApiBuilder = function() {
  this.query = `${BASE_URL_API}/categories`
  this.field = '',
  this.with = (field) => {
    this.field = field;
    return this;
  }
  this.build = () => (`${this.query}/${this.field}`);
}

var CarsApiBuilder = function() {
  this.query = `${BASE_URL_API}/cars`;
  this.fields = [],
  this.page = PAGE_DEFAULT,
  this.size = SIZE_PER_PAGE_DEFAULT,
  this.sort = '';
  this.setPage = (page) => {
    this.page = page;
    return this;
  },

  this.setSize = (size) => {
    this.size = size;
    return this;
  },

  this.setSort = (field, order='DESC') => {
    this.sort = `${field},${order}`;
    return this;
  },

  this.with = (field, value) => {
    if (value) this.fields.push(`&${field}=${value}&`);
    return this;
  },

  this.build = () => {
    let paramsQuery = '';
    this.fields.forEach (em => {
      paramsQuery += em;
    })
    return `${this.query}?page=${this.page}&size=${this.size}&sort=${this.sort}${paramsQuery}`;
  }
}

var OneCarApiBuilder = function() {
  this.query = `${BASE_URL_API}/cars`;
  this.id = 0;
  this.with = (id) => {
    this.id = id;
    return this;
  }
  this.build = () => {
    return `${this.query}/${this.id}`;
  }
}

var AdvanceSearchApiBuilder = function() {
  this.query = `${BASE_URL_API}/cars/search?search=`;
  this.fields = [];
  this.page = PAGE_DEFAULT,
  this.size = SIZE_PER_PAGE_DEFAULT,
  this.sort = '';
  this.setPage = (page) => {
    this.page = page;
    return this;
  },

  this.setSize = (size) => {
    this.size = size;
    return this;
  },

  this.setSort = (field, order='DESC') => {
    this.sort = `${field},${order}`;
    return this;
  },

  this.with = (field, operator, value) => {
    if (value) this.fields.push(`${field}${operator}${value},`);
    return this;
  }

  this.build = () => {
    let paramsQuery = '';
    this.fields.forEach(em => {
      paramsQuery += em;
    })
    return `${this.query}?${paramsQuery}&page=${this.page}&size=${this.size}&sort=${this.sort}`
  }
}

var ApiBuilder = function() {
  this.categoryApi = () => {
    return new CategoryApiBuilder();
  }

  this.carsApi = () => {
    return  new CarsApiBuilder();
  }

  this.oneCarApi = () => {
    return new OneCarApiBuilder();
  }

  this.advanceSearchApi = () => {
    return new AdvanceSearchApiBuilder();
  }
}

export default ApiBuilder;