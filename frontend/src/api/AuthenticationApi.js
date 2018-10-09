import {fetchApi} from './utils';
import ApiBuilder from './apiBuilder';

const apiBuilder = new ApiBuilder();

const AuthenticationApi = {
  login: (loginForm) => {
    return new Promise((resolve, reject) => {
      fetchApi(apiBuilder.path("auth/login").build(), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginForm)
      }).then(response => {resolve(response)},
      error => {reject(error)})
    })
  },
  signup: (signUpForm) => {
    return new Promise((resolve, reject) => {
      fetchApi(apiBuilder.path("auth/signup").build(), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpForm)
      }).then(response => {
        resolve(response);
      }, error => {reject(error)})
    })
  }
}

export default AuthenticationApi;