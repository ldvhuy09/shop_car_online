import React, { Component } from 'react';
import { Container, Button } from 'mdbreact';
import InputForm from './inputForm';
import { checkEmpty, checkEmail, checkMatch, checkLength } from '../utlis/validator';
import { 
    ERROR_MSG_FORM_IS_EMPTY, 
    ERROR_MSG_EMAIL_INVALID, 
    ERROR_MSG_PASSWORD_INVALID, 
    ERROR_MSG_CONFIRM_PASSWORD_NOT_MATCH
} from '../constants/errorMessage';

const MIN_LENGTH_PASSWORD = 6;

function FormValidator() {
    this.form = {
        name = {
            validators: [checkEmpty],
            errorMessages: [ERROR_MSG_FORM_IS_EMPTY],
            value: ''
        },
        email = {
            validators: [checkEmpty, checkEmail],
            errorMessages: [ERROR_MSG_FORM_IS_EMPTY, EMAIL_INVALID],
            value: ''
        },
        password = {
            validators: [checkEmpty, checkLength],
            errorMessages: [ERROR_MSG_FORM_IS_EMPTY, ],
            value: ''
        },
        confirmPassword = {
            validators: [checkMatch],
            errorMessages: [ERROR_MSG_CONFIRM_PASSWORD_NOT_MATCH],
            value: ''
        },
    },
    this.validate = (field, value) => {
        for (let i = 0; i < this.form[field].validators; i++) {
            if (! this.form[field].validators[i](value))
                return this.form[field].errorMessages[i];
        }
        return null;
    }
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.formValidator = new FormValidator();
        this.state = {
            name = {
                value: '',
                errorMessage: '',
                type: 'text',
                label: "Tên của bạn",
                classForForm: 'form-control',
            },
            email = {
                value: '',
                errorMessage: '',
                type: 'email',
                label: "Email của bạn",
                classForForm: 'form-control',
            },
            password = {
                value: '',
                errorMessage: '',
                type: 'password',
                label: "Mật khẩu của bạn",
                classForForm: 'form-control',
            },
            confirmPassword = {
                value: '',
                errorMessage: '',
                type: 'password',
                label: "Xác nhận mật khẩu",
                classForForm: 'form-control',
            }
        }
    }

    handleChange = (fieldName, value) => {
        let field = this.state[fieldName];
        field.errorMessage = this.formValidator.validate(field, value);
        field.classForForm = 'form-control isvalid';
        if (field.errorMessage !== null) {
            field.classForForm = 'form-control invalid';
        }
        this.setState({
            ...this.state,
            [fieldName]: field
        })
    }

    render() {
        let fieldsName = ["name", "email", "password", "confirmPassword"];

        let inputs = fieldsName.forEach((fieldName) => {
            field = this.state[fieldName];
            return (
                <div className="mb-3">
                    <InputForm 
                        label = {field.label}
                        type = {field.type}
                        field = {fieldName}
                        handleChange = {this.handleChange} 
                        classForForm = {field.classForForm}
                        errorMessage = {field.errorMessage}
                    />
                </div>
            )
        })
        return(
            <Container>
                <form className='needs-validation' onSubmit={this.handleFormSubmit} noValidate>
                    {inputs}
                    <Button rounded color="cyan" className="btn-block z-depth-1a" type="submit">Đăng kí</Button>
                </form>
            </Container>
        );
    }
}