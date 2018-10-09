import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomMenu from '../../components/menu';
import { PAGE_DEFAULT, SIZE_PER_PAGE_DEFAULT } from '../../constants/api';
import ListProduct from '../../components/list-product';
import Pagination from '../../components/pagination';
import ProductAction from '../../actions/productAction';
import CategoryAction from '../../actions/categoryAction';

class GalleryCar extends Component {
  constructor(props) {
    super(props);
    this.queryObj = {};
    this.state = {
      field: '',
      value: ''
    }
  }

  componentWillMount() {
    this.props.fetchTypes();
    this.props.fetchBrands();
  	this.queryObj = this.parseUrl();
	  this.props.fetchCars(this.queryObj);
  }

  componentDidMount() {
	  window.scrollTo(0, 0);
  }

  parseUrl() {
    let query = new URLSearchParams(window.location.search);
    this.setState({
      field: this.props.match.params.field,
      value: this.props.match.params.value
    })
	  return {
		  [this.props.match.params.field]: this.props.match.params.value,
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
              <CustomMenu activedItem={this.state.value} menu={{
                types: this.props.types,
                brands: this.props.brands
              }}/>
            </div>
            <div className='col-md-9'>
              <ListProduct 
                cars={this.props.cars}
                title={'Xe ' + this.state.value}
              />
            </div>
          </div>
          <div className='pagination row float-right'>
            <Pagination
	            totalPages={this.props.totalPages}
	            currentPage={this.props.page}
              fetchCars={this.props.fetchCars}
              field={this.state.field}
              value={this.state.value}/>
          </div>
        </div>        
      </div>
    )
  }
};

const mapStateToProp = (state) => ({
  types: state.CategoryReducer.types,
  brands: state.CategoryReducer.brands,
  cars: state.GalleryCarReducer.cars,
  totalPages: state.GalleryCarReducer.totalPages,
  page: state.GalleryCarReducer.page
});

const mapDispatchToProp = dispatch => ({
  fetchCars: (queryObj) => dispatch(ProductAction.fetchGalleryCar(queryObj)),
  fetchTypes: () => dispatch(CategoryAction.fetchTypes()),
  fetchBrands: () => dispatch(CategoryAction.fetchBrands()),
});

export default connect(mapStateToProp, mapDispatchToProp)(GalleryCar);