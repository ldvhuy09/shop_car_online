const minPasswordLength = 6;
const maxPasswordLength = 50;
module.exports = {
    MIN_PASSWORD_LENGTH: minPasswordLength,
    MAX_PASSWORD_LENGTH: maxPasswordLength,
    ERROR_MSG_FORM_IS_EMPTY: 'Còn trống!',
    ERROR_MSG_EMAIL_INVALID: 'Email không hợp lệ!',
    ERROR_MSG_PASSWORD_INVALID: `Mật khẩu phải có độ dài từ ${minPasswordLength} đến ${maxPasswordLength} kí tự!`,
    ERROR_MSG_EMAIL_OR_PASSWORD_INCORRECT: 'Tài khoản hoặc mật khẩu chưa chính xác!',
    ERROR_MSG_CONFIRM_PASSWORD_NOT_MATCH: 'Mật khẩu xác nhận chưa khớp!'
}