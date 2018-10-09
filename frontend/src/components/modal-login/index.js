import React, { Component } from 'react';
import { 
    Modal, 
    ModalBody,
    ModalHeader, 
    ModalFooter, 
    NavLink 
} from 'mdbreact';
import { Fa } from 'mdbreact';
import LoginForm from '../form/loginForm';
import SignupForm from '../form/signupForm';
import {
    FORM_INVALID,
} from '../../constants/action';


export default class ModalLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            isLoginForm: true,
            message: ''
        };
    };

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.authenStatus) {
            if (!nextProps.authenStatus.isAuthen) {
                this.setState({
                    ...this.state,
                    message: nextProps.authenStatus.message
                })
            } else this.toggle();
        }
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            isLoginForm: true
        });
    };

    changeForm = () => {
        this.setState({
            ...this.state,
            isLoginForm: !this.state.isLoginForm
        });
    }

    submitForm(requestType, form) {
        this.props.authenticate(requestType, form)
    }

    render() {
        let form, task, buttonTitle;
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
                    {this.props.message && <div className='container'>{this.props.message}</div>}
                    <ModalBody>{form}</ModalBody>
                    <ModalFooter>
                        <button className='btn btn-outline-blue mr-1' onClick={this.toggle}>Thoát</button>
                        <button className='btn btn-danger'  onClick={this.changeForm}>{buttonTitle}</button>
                    </ModalFooter>
                </Modal>
            </NavLink>
        );
    }
};


