import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from '../constants/authentication';
import  validator from 'validator';
 
export var checkEmpty = (str) => {
        return !validator.isEmpty(str);
    }

export var checkEmail = (str) => {
        return validator.isEmail(str);
    };

export var checkLength = (str, option = {min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH}) => {
        return validator.isLength(str, option);
    };

export var checkMatch = (passwordForm) => {
        return passwordForm.password === passwordForm.confirmPassword;
    }

export function FormValidator(validUtils, errorMessage) {
    this.validate = validUtils;
    this.errorMessage = errorMessage;
}
