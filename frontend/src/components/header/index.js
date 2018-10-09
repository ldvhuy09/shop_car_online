import { Fa } from 'mdbreact';
import { connect } from 'react-redux';
import ModalLogin from '../modal-login';
import React, { Component } from 'react'
import SearchAction from '../../actions/searchAction';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticationAction from '../../actions/authenticationAction';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink } from 'mdbreact';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';


class CustomNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value,      
        });
    }

    handleClick = (event) => {
        this.props.onSearch(this.state, 1);
    }

    handleLogout = (event) => {
        alert('Bạn đã đăng xuất!!!');
        this.props.logout();
    }

    render() {
        let accountButton;
        if (this.props.message) alert(this.props.message);
        if (this.props.authenStatus) {
            accountButton = (
                <Dropdown>
                    <DropdownToggle nav caret>
                        <Fa icon="user" size='1x' className="d-inline-inline" />
                        Chào
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Tài khoản</DropdownItem>
                        <DropdownItem onClick={this.handleLogout}> 
                            <Fa icon="sign-out" size='1x' className="d-inline-inline" />
                            Đăng xuất
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            );
        } else {
            accountButton = (
                <ModalLogin 
                    //authenStatus={this.props.authenStatus} TODO: consider more
                    authenticate={this.props.authenticate}
                />
            )
        }
        //TODO: need to show notify after send request authen
        return (
            <Router>
                <Navbar color="blue" dark expand="md" scrolling fixed='top'>
                    <div className='container'>
                        <NavbarBrand href="/" className='col-lg-2'>
                            <img 
                                className='img-fluid'
                                src="https://res.cloudinary.com/ldvhuy09/image/upload/v1535007523/cars/logo.png" 
                            />
                        </NavbarBrand>
                        <NavbarNav className='search-bar col-lg-6'>
                            <div className="input-group form-sm form-2 pl-0">
                                <input 
                                    type="text" 
                                    placeholder="Tim kiếm" 
                                    onChange={this.handleChange}
                                    className="form-control my-0" 
                                />
                                <div className="input-group-append">
                                    <a href="/search" onClick={this.handleClick}>
                                        <span className="input-group-text lighten-3" id="basic-text1">
                                            <i className="fa fa-search text-grey" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </NavbarNav>
                        <NavbarNav className='col-lg-4'>
                            <NavItem>
                                <NavLink to="#"><Fa icon="bell" size='1x' className="d-inline-inline" />
                                    <div className="d-none d-md-inline">Khuyến mãi</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                {accountButton} 
                            </NavItem>
                            <NavItem className='cart-button'>
                                <NavLink to="#"><Fa icon="shopping-cart" size='1x' className="d-inline-inline" />
                                    <div className="d-none d-md-inline">Giỏ hàng</div>
                                </NavLink>
                            </NavItem>
                        </NavbarNav>
                    </div>
                </Navbar>
            </Router>
        )
    }
};

const mapStateToProp = (state) => ({
    authenStatus: state.AuthenticationReducer.authenStatus,
    message: state.AuthenticationReducer.message
});

const mapDispatchToProp = (dispatch) => ({
    onSearch: (form, page) => dispatch(SearchAction.onSearch(form, page)),
    authenticate: (requestType, form) => dispatch(AuthenticationAction.authenticate(requestType, form)),
    logout: () => dispatch(AuthenticationAction.logout())
});

export default connect(mapStateToProp, mapDispatchToProp)(CustomNavBar);
