import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, NavbarToggler } from 'mdbreact';
import { Button, Badge } from 'mdbreact';
import { Fa } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import ModalLogin from '../modal-login';

export default class CustomNavBar extends Component {
  render() {
    return (
      <Router>
        <Navbar color="blue" dark expand="md" scrolling fixed='top'>
          <div className='container'>
            <NavbarBrand href="/">
              <img src="https://res.cloudinary.com/ldvhuy09/image/upload/v1535007523/cars/logo.png" className='img-fluid'/>
            </NavbarBrand>
            <NavbarNav mr-5 left className='search-bar'>
              <div className="input-group form-sm form-2 pl-0">
                <input className="form-control my-0 amber-border" type="text" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <span className="input-group-text lighten-3" id="basic-text1"><i className="fa fa-search text-grey" aria-hidden="true"></i></span>
                </div>
              </div>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink to="#"><Fa icon="bell" size='1x' className="d-inline-inline" />
                  <div className="d-none d-md-inline">Khuyến mãi</div>
                </NavLink>
              </NavItem>
              <NavItem>
                <ModalLogin/>                 
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
//<div className="d-none d-md-inline">Đăng nhập</div>