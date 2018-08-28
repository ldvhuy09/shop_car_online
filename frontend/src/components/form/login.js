import React, { Component } from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import FormValidator from './formValidator';

export default class LoginForm extends Component  {
  constructor(props) {
    super(props);
    this.submitted = false;
    this.validator = new FormValidator([
      { 
        field: 'email', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Email còn trống' 
      },
      { 
        field: 'email', 
        method: 'isEmail', 
        validWhen: true, 
        message: 'Email không hợp lệ' 
      },
      { 
        field: 'password', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Mật khẩu còn trống'
      }]);
    this.state = {
      email: '',
      password: '',
      validation: this.validator.valid()
    }
  }
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.validate(event.target.name);
    this.sendWarningForFormInvalid(event.target);
  };

  validate = field => {
    var validation = this.validator.validate(this.state);
    this.setState({ validation });
  };

  sendWarningForFormInvalid = (target) => {
    for (var field in this.state.validation) {
      if (this.state.validation[field].isInvalid)
        target.className = 'form-control is-invalid';
      else target.className = 'form-control is-valid';
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.validate();
    event.target.className += ' was-validated';
    this.submitted = true;
  }
  render() {
    let validation = this.submitted ?
                    this.validator.validate(this.state) :  
                    this.state.validation;
    return(
      <Container>
        <form className='needs-validation' onSubmit={this.handleFormSubmit} noValidate>
          <div className="mb-3">
            <label className="grey-text">Email của bạn</label>
            <input name='email' onChange={this.handleInputChange} type="email" className="form-control" required/>
            <div className="invalid-feedback">{validation.email.message}</div>
          </div>
          <div className="mb-3">
            <label className="grey-text">Mật khẩu</label>
            <input name='password' onChange={this.handleInputChange} type="password" className="form-control" required/>
            <div className="invalid-feedback">{validation.password.message}</div>
          </div>
          <p className="font-small d-flex justify-content-end pb-3">Quên <a href="#" className="red-text ml-1"> mật khẩu?</a></p>
          <Button rounded color='blue' type='submit' className="btn-block z-depth-1a">Đăng nhập</Button>
        </form>
      </Container>
    );
  }
};
