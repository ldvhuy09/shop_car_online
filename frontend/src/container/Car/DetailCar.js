import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListProduct from '../../components/list-product';
import DetailInforProduct from './components/detailInfor';
import CustomMenu from '../../components/menu';
import ProductAction from '../../actions/productAction';
import CategoryAction from '../../actions/categoryAction';


class DetailCar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let idCar = this.props.match.params.id;
    this.props.fetchDetail(idCar);
    this.props.fetchTypes();
    this.props.fetchBrands();
  }

  componentWillReceiveProps(nextProps) {
    let car = nextProps.car;
    if (car.id && car.id !== this.props.car.id) {
      this.props.fetchSameBrandCars(car.brand, car.id);
      this.props.fetchSameTypeCars(car.type, car.id);
    }
  }

  componentWillUpdate(nextProps) {
	  window.scrollTo(0, 0);
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchDetail(nextProps.match.params.id);
    }
  }

	render() {
    let sameTypeCars = [], sameBrandCars = [];
    if (this.props.car.id) {
      sameTypeCars = this.props.sameTypeCars;
      sameBrandCars = this.props.sameBrandCars;
    }
		return (
			<div className='main-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <CustomMenu menu={{
                types: this.props.types,
                brands: this.props.brands
              }}/>
            </div>
            <div className='col-lg-9'>
	            <div className='row'>
		            <DetailInforProduct car={this.props.car}/>
	            </div>
	            <div className='row'>
		            <ListProduct
			            cars={sameTypeCars}
			            title="Cùng loại xe"
                  colSizeLg="4"
		            />
	            </div>
	            <div className='row'>
		            <ListProduct
			            cars={sameBrandCars}
			            title="Cùng thương hiệu"
			            colSizeLg="4"
		            />
	            </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}


const mapStateToProp = (state) => ({
  sameTypeCars: state.DetailCarReducer.sameTypeCars,
  sameBrandCars: state.DetailCarReducer.sameBrandCars,
  types: state.CategoryReducer.types,
  brands: state.CategoryReducer.brands,
  car: state.DetailCarReducer.car,
});

const mapDispatchToProp = dispatch => ({
  fetchSameTypeCars: (value, idCar) => dispatch(ProductAction.fetchSameTypeCars(value, idCar)),
  fetchSameBrandCars: (value, idCar) => dispatch(ProductAction.fetchSameBrandCars(value, idCar)),
  fetchDetail: (idCar) => dispatch(ProductAction.fetchDetail(idCar)),
  fetchTypes: () => dispatch(CategoryAction.fetchTypes()),
  fetchBrands: () => dispatch(CategoryAction.fetchBrands()),
});

export default connect(mapStateToProp, mapDispatchToProp)(DetailCar);
