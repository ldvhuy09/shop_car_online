import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';
import FormValidator from './formValidator';
import validator from 'validator';

export default class SignupForm extends React.Component  {
  constructor(props) {
    super(props);
    this.submitted = false;
    this.validator = new FormValidator([
      { 
        field: 'name', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Tên còn trống' 
      },
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
      },
      { 
        field: 'confirmPass', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Mật khẩu xác nhận còn trống'
      },
      { 
        field: 'confirmPass', 
        method: this.passwordMatch, 
        validWhen: true, 
        message: 'Mật khẩu xác nhận chưa khớp'
      }
    ]);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPass: '',
      validation: this.validator.valid()
    };
  };

  passwordMatch = (confirmation, state) => (state.password === confirmation);

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.validate();
    this.sendWarningForFormInvalid(event.target);
  };

  validate = () =>{
    var validation = this.validator.validate(this.state);
    this.setState({ validation });
  };

  sendWarningForFormInvalid = (target) => {
    // for (var field in this.state.validation) {
    //   if (this.state.validation[field].isInvalid)
    //     target.className = 'form-control is-invalid';
    //   else target.className = 'form-control is-valid';
    // }
    if (this.state.validation[target.name].isInvalid)
      target.className = 'form-control is-invalid';
    else target.className = 'form-control is-valid';
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.validate();
    event.target.className += " was-validated";
    this.submitted = true;     
  };

  render() {
    // let validation = this.submitted ?
    //                 this.validator.validate(this.state) :  
    //                 this.state.validation;
    console.log('state', this.state);
    let validation = this.validator.validate(this.state);
    return(
      <Container>
        <form className='needs-validation' onSubmit={this.handleFormSubmit} noValidate>
          <div className="mb-3">
            <label className="grey-text">Tên của bạn</label>
            <input name='name' onChange={this.handleInputChange} type="text" className="form-control" required/>
            <div className="invalid-feedback">{validation.name.message}</div>
          </div>
          <div className="mb-3">
            <label className="grey-text">Email của bạn</label>
            <input name='email' onChange={this.handleInputChange} type="email" className="form-control" required/>
            <div className="invalid-feedback">{validation.email.message}</div>
          </div>
          <div className="mb-3">
            <label className="grey-text">Mật khẩu</label>
            <input name='password' onChange={this.handleInputChange} className="form-control" type="password" required/>
            <div className="invalid-feedback">{validation.password.message}</div>
          </div>
          <div className="mb-3">
            <label className="grey-text">Xác nhận mật khẩu</label>
            <input name='confirmPass' onChange={this.handleInputChange} className="form-control" type="password" required/>
            <span className="invalid-feedback">{validation.confirmPass.message}</span>
          </div>
          <Button rounded color="cyan" className="btn-block z-depth-1a" type="submit">Đăng kí</Button>
        </form>
      </Container>
    );
  }
};



