import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomMenu from '../../components/menu';
import { PAGE_DEFAULT, SIZE_PER_PAGE_DEFAULT } from '../../constants/api';
import ListProduct from '../../components/list-product';
import Pagination from '../../components/pagination';
import ProductAction from '../../actions/productAction';
import MenuAction from "../../actions/menuAction";

class GalleryCar extends Component {
  constructor(props) {
    super(props);
    this.paramsOfUrl = {}
  }

  componentWillMount() {
  	this.props.fetchMenu();
  	this.paramsOfUrl = this.parseUrl();
	  this.props.fetchCars(
		  this.paramsOfUrl.field,
		  this.paramsOfUrl.value,
		  this.paramsOfUrl.size,
		  this.paramsOfUrl.page);
  }

  componentDidMount() {
	  window.scrollTo(0, 0);
  }

  parseUrl() {
	  let query = new URLSearchParams(window.location.search);
	  return {
		  field : this.props.match.params.field,
      value : this.props.match.params.value,
      size : query.get('size') || SIZE_PER_PAGE_DEFAULT,
      page : query.get('page') || PAGE_DEFAULT,
    }
  }

  render() {
	  window.scrollTo(0, 0);
	  console.log(this.props.page);
	  return (
      <div className='main-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <CustomMenu activedItem={this.paramsOfUrl.value} menu={this.props.menu}/>
            </div>
            <div className='col-md-9'>
              <ListProduct 
                cars={this.props.cars}
                title={'Xe ' + this.paramsOfUrl.value}
              />
            </div>
          </div>
          <div className='pagination row float-right'>
            <Pagination
	            totalPages={this.props.totalPages}
	            currentPage={this.props.page}
              fetchCars={this.props.fetchCars}
              field={this.paramsOfUrl.field}
              value={this.paramsOfUrl.value}/>
          </div>
        </div>        
      </div>
    )
  }
}

const mapStateToProp = (state) => ({
  menu: state.HomeReducer.menu,
  cars: state.GalleryCarReducer.cars,
  totalPages: state.GalleryCarReducer.totalPages,
  page: state.GalleryCarReducer.page
});

const mapDispatchToProp = dispatch => ({
  fetchCars: (field, value, sizePerPage = SIZE_PER_PAGE_DEFAULT, page = PAGE_DEFAULT) =>
    dispatch(ProductAction.fetchGalleryCar(field, value, sizePerPage, page)),
  fetchMenu: () => dispatch(MenuAction.fetchMenu()),
});

export default connect(mapStateToProp, mapDispatchToProp)(GalleryCar);