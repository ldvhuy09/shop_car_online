import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, NavLink } from 'mdbreact';
import { Fa } from 'mdbreact';
import LoginForm from '../form/login';
import SignupForm from '../form/signup';



export default class ModalLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoginForm: true,
    };
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      isLoginForm: true
    });
    console.log(this.state);
  };

  changeForm = () => {
    this.setState({
      ...this.state,
      isLoginForm: !this.state.isLoginForm
    });
  }

  render() {
    var form, task, buttonTitle;
    if (this.state.isLoginForm) {
      form = <LoginForm/>;
      task = "Đăng nhập";
      buttonTitle = "Đăng kí";
    } else {
      form = <SignupForm/>;
      task = "Đăng kí";
      buttonTitle = "Đăng nhập";
    }
    return (
      <NavLink to="#" onClick={this.toggle}>
        <div className="d-none d-md-inline"><Fa icon="user" size='1x' className="d-inline-inline" />Đăng nhập</div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
          <ModalHeader toggle={this.toggle} className='text-center'>{task}</ModalHeader>
          <ModalBody>
            {form}
          </ModalBody>
          <ModalFooter>
            <Button outline color='blue' className="mr-1" onClick={this.toggle}>Thoát</Button>
            <Button color="danger" onClick={this.changeForm}>{buttonTitle}</Button>
          </ModalFooter>
        </Modal>
      </NavLink>
    );
  }
};

//  className="d-none d-md-inline"
