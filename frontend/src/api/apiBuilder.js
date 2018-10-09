import { SERVER_BASE_URL, API_VER } from '../constants/config';
import { PAGE_DEFAULT, SIZE_PER_PAGE_DEFAULT} from '../constants/api';
const QueryStringBuilder = require('query-string');

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

var AuthenticationApiBuilder = function() {
  this.query = `${BASE_URL_API}/auth/`;
  this.field = '' ;
  this.withLogin = () => {
    this.field = 'login';
    return this;
  }
  this.withSignUp = () => {
    this.field = 'signup';
    return this;
  }
  this.build = () => {
    return `${this.query}${this.field}`;
  }
}

var OrderApi = function() {
  this.query = `${BASE_URL_API}/order`;
  this.field = "";
  this.with
}

// var ApiBuilder = function() {
//   this.categoryApi = () => {
//     return new CategoryApiBuilder();
//   }

//   this.carsApi = () => {
//     return  new CarsApiBuilder();
//   }

//   this.oneCarApi = () => {
//     return new OneCarApiBuilder();
//   }

//   this.advanceSearchApi = () => {
//     return new AdvanceSearchApiBuilder();
//   }
  
//   this.authenticationApi = () => {
//     return new AuthenticationApiBuilder();
//   }
// }

var ApiBuilder = function() {
  this.baseUrl = BASE_URL_API;
  this.pathUrl = "";
  this.queryObj = {};
  this.path = (path) => {
    this.pathUrl = path;
    return this;
  };
  this.query = (query) => {
    this.queryObj = query;
    return this;
  };
  this.build = () => {
    let queryString = QueryStringBuilder.stringify(this.queryObj);
    return `${this.baseUrl}/${this.pathUrl}?${queryString}`;
  }
}

export default ApiBuilder;