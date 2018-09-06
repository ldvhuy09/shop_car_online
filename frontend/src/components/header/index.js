import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink } from 'mdbreact';
import { Fa } from 'mdbreact';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ModalLogin from '../modal-login';
import SearchAction from '../../actions/searchAction';


class CustomNavBar extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.selectOption('name', event.target.value);
  }

  handleClick = (event) => {
    this.props.onSearch(this.props.form, 1);
  }

  render() {
    return (
      <Router>
        <Navbar color="blue" dark expand="md" scrolling fixed='top'>
          <div className='container'>
            <NavbarBrand href="/" className='col-lg-2'>
              <img src="https://res.cloudinary.com/ldvhuy09/image/upload/v1535007523/cars/logo.png" className='img-fluid'/>
            </NavbarBrand>
            <NavbarNav className='search-bar col-lg-6'>
              <div className="input-group form-sm form-2 pl-0">
                <input className="form-control my-0" type="text" placeholder="Tim kiếm" onChange={this.handleChange}/>
                <div className="input-group-append">
                  <a href="/search" onClick={this.handleClick}>
                  <span className="input-group-text lighten-3" id="basic-text1"><i className="fa fa-search text-grey" aria-hidden="true"></i></span></a>
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

const mapStateToProp = (state) => ({
  form: state.SearchFormReducer.form,
});

const mapDispatchToProp = (dispatch) => ({
  selectOption: (field, value) => dispatch(SearchAction.selectOption(field, value)),
  onSearch: (form, page) => dispatch(SearchAction.onSearch(form, page))
});



export default connect(mapStateToProp, mapDispatchToProp)(CustomNavBar);
