import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryAction from '../../actions/categoryAction';
import ProductAction from '../../actions/productAction';
import CustomMenu from '../../components/menu';
import CustomCarousel from '../../components/carousel';
import ListProduct from '../../components/list-product';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  componentWillMount() {
    this.props.fetchTypes();
    this.props.fetchBrands();
    this.props.fetchTopsCar();
  }

  render() {
    return (
      <div className='main-body'>
        <div className='container'>
          <div id="menu-vs-slider" className='row'>
            <div className='col-md-2'>
              <CustomMenu menu={{
                types: this.props.types,
                brands: this.props.brands
              }}/>
            </div>
            <div className='col-md-10'>
              <CustomCarousel/>
            </div>
          </div>
          <main>
            <div id='tops-product' className='container'>
              <div className='row'>
                <ListProduct 
                  cars={this.props.topViewCars}
                  title="Top xem nhiều"
                  colSizeLg="3"
                />
              </div>
              <div className='row'>
                <ListProduct
                  cars={this.props.topSellerCars}
                  title="Top bán nhiều"
                  colSizeLg="3"
                />
              </div>
              <div className='row'>
                <ListProduct
                  cars={this.props.topNewCars}
                  title="Top mới"
                  colSizeLg="3"
                />
              </div>
            </div>
          </main>
        </div>        
      </div>
    )
  }
};


const mapStateToProp = (state) => ({
  types: state.CategoryReducer.types,
  brands: state.CategoryReducer.brands,
  topSellerCars: state.HomeReducer.topSellerCars,
  topViewCars: state.HomeReducer.topViewCars,
  topNewCars: state.HomeReducer.topNewCars
})

const mapDispatchToProp = dispatch => ({
  fetchTypes: () => dispatch(CategoryAction.fetchTypes()),
  fetchBrands: () => dispatch(CategoryAction.fetchBrands()),
  fetchTopsCar: () => dispatch(ProductAction.fetchTops()),
  fetchDetail: (idCar) => dispatch(ProductAction.fetchDetail(idCar))
});

export default connect(mapStateToProp, mapDispatchToProp)(Home);

