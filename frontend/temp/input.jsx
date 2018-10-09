import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from '../constants/authentication'
module.exports = {
    checkInputEmpty: (str) => {
        return !validator.isEmpty(str);
    },

    checkEmail: (str) => {
        return validator.isEmail(str);
    },

    checkLength: (str, option = {min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH}) => {
        return validator.isLength(str, option);
    },

    checkMatch: (str1, str2) => {
        return str1 === str2;
    }
}
