import React, { Component } from 'react';
import { Container } from 'mdbreact';
import InputForm from './inputForm';
import { checkEmpty, checkEmail } from '../../utlis/validator';
import { 
    ERROR_MSG_FORM_IS_EMPTY, 
    ERROR_MSG_EMAIL_INVALID, 
} from '../../constants/authentication';
import {
    REQUEST_LOGIN
} from '../../constants/action';

function FormValidator() {
    this.form = {
        email : {
            validators: [checkEmpty, checkEmail],
            errorMessages: [ERROR_MSG_FORM_IS_EMPTY, ERROR_MSG_EMAIL_INVALID],
        },
        password : {
            validators: [checkEmpty],
            errorMessages: [ERROR_MSG_FORM_IS_EMPTY],
        }
    },
    this.validate = (field, value) => {
        for (let i = 0; i < this.form[field].validators.length; i++) {
            if (! this.form[field].validators[i](value))
                    return this.form[field].errorMessages[i];
        }
        return null;
    }
}

export default class LoginForm extends Component  {
    constructor(props) {
        super(props);
        this.formValidator = new FormValidator();
        this.fieldNames = ["email", "password"];
        this.state = {
            alert: '',
            email : {
                value: '',
                errorMessage: '',
                type: 'email',
                label: "Email của bạn",
                classForForm: 'form-control',
            },
            password : {
                value: '',
                errorMessage: '',
                type: 'password',
                label: "Mật khẩu của bạn",
                classForForm: 'form-control',
            }
        }
    }

    handleChange = (fieldName, value) => {
        let field = this.state[fieldName];
        field.value = value;
        if (fieldName === 'confirmPassword') {
            value = {
                password: this.state.password.value,
                confirmPassword: value
            }
        }
        field.errorMessage = this.formValidator.validate(fieldName, value);
        field.classForForm = 'form-control is-valid';
        if (field.errorMessage != null) {
            field.classForForm = 'form-control is-invalid';
        }
        this.setState({
            ...this.state,
            [fieldName]: field
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let formBody = {}, fieldNames =  ['email', 'password'];
        var parent = this._reactInternalFiber._debugOwner.stateNode;
        if (this.checkFormIsValid (fieldNames)) {
            fieldNames.forEach((fieldName) => {
                formBody[fieldName] = this.state[fieldName].value;
            })
            parent.submitForm (REQUEST_LOGIN, formBody);
        } 
        else this.setState({
            ...this.state,
            alert: 'Thông tin chưa đầy đủ!'
        });
    }

    checkFormIsValid = (fieldNames) => {
        for (let i in fieldNames) {
            if (this.state[fieldNames[i]].errorMessage || !this.state[fieldNames[i]].value) 
                return false;
        }
        return true;
    }
    
    render() {
        let inputForms = [];
        for (let i = 0; i < this.fieldNames.length; i++) {
            let field = this.state[this.fieldNames[i]];
            inputForms.push((
                <div className="mb-2" key={i}>
                    <InputForm label = {field.label} type = {field.type} field = {this.fieldNames[i]}
                        handleChange = {this.handleChange} 
                        classForForm = {field.classForForm}
                        errorMessage = {field.errorMessage}
                    />
                </div>
            ))
        }
        return(
            <Container>
                {
                    this.state.alert && 
                    <div className="alert alert-danger" role="alert">
                        {this.state.alert}
                    </div>
                }
                <form className='needs-validation' onSubmit={this.handleSubmit} noValidate>
                    {inputForms}
                    <button  className="btn btn-blue btn-rounded btn-block z-depth-1a mx-auto" type="submit">Đăng nhập</button>
                </form>
            </Container>
        );
    }
};
