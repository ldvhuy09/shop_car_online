import {
  REQUEST_LOGIN,
  REQUEST_SIGNUP,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGOUT_SUCCESS,
} from '../constants/action';

const AuthenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {}
    case REQUEST_SIGNUP:
      return {}
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenStatus: true,
        message: action.payload.message
      } 
    case LOGIN_FAILED: 
      return {
        ...state,
        authenStatus: false,
        message: action.payload.message
      }
    case SIGNUP_FAILED:
      return {
        ...state,
        authenStatus: false,
        message: action.payload.message
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authenStatus: true,
        message: action.payload.message
      }
    case LOGOUT_SUCCESS: 
      return {
        authenStatus: false,
      }
    default:
      return state;
  }
};

export default AuthenticationReducer;