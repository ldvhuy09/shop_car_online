import {
    REQUEST_LOGIN,
    REQUEST_SIGNUP,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS
} from '../constants/action';
import AuthenticationApi from '../api/AuthenticationApi';
import { OK, UNAUTHORIZED, BAD_REQUEST } from '../constants/httpStatus';

const MESSAGE_UNAUTHORIZED = "Tài khoản hoặc mật khẩu không đúng!";
const MESSAGE_BAD_REQUEST = 'Email đã tồn tại!';
const MESSAGE_LOGIN_SUCCESS = "Đăng nhập thành công!";
const MESSAGE_UNDEFINE = 'Xảy ra sự cố khi đăng nhập';

function Action(type, message) {
    this.type = type;
    this.payload = {
        message,
    }
}

const AuthenticationAction = {
    authenticate: (requestType, form) => {
        return (dispatch) => {
            dispatch({type: requestType});
            var requestingAuthentication;
            if (requestType === REQUEST_SIGNUP) {
                requestingAuthentication = AuthenticationApi.signup(form);
            } 
            else requestingAuthentication = AuthenticationApi.login(form);
            requestingAuthentication.then(response => {
                switch (response.status) {
                    case OK: 
                        localStorage.authorization = `${response.payload.tokenType} ${response.payload.accessToken}`
                        dispatch({ type: LOGIN_SUCCESS, payload: { message: MESSAGE_LOGIN_SUCCESS}});
                        break;
                    case UNAUTHORIZED:
                        dispatch({type: LOGIN_FAILED, payload: {message: MESSAGE_UNAUTHORIZED}});
                        break;
                    case BAD_REQUEST:
                        dispatch({type: LOGIN_FAILED, payload: {message: MESSAGE_BAD_REQUEST}});
                        break;
                    default: 
                        dispatch({type: LOGIN_FAILED, payload: {message: MESSAGE_UNDEFINE}});
                }
            })
        }
    },
    logout: () => {
        return (dispatch) => {
            delete localStorage.authentication;
            dispatch({type: LOGOUT_SUCCESS});
        }
    }

}

export default AuthenticationAction;