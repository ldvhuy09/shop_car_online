import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuAction from '../../actions/menuAction';
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
    this.props.fetchMenu();
    this.props.fetchTopsCar();
  }

  render() {
    return (
      <div className='main-body'>
        <div className='container'>
          <div id="menu-vs-slider" className='row'>
            <div className='col-md-2'>
              <CustomMenu menu={this.props.menu}/>
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
                  fetchDetail={this.props.fetchDetail}
                />
              </div>
              <div className='row'>
                <ListProduct
                  cars={this.props.topSellerCars}
                  title="Top bán nhiều"
                  fetchDetail={this.props.fetchDetail}
                />
              </div>
              <div className='row'>
                <ListProduct
                  cars={this.props.topNewCars}
                  title="Top mới"
                  fetchDetail={this.props.fetchDetail}
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
  menu: state.HomeReducer.menu,
  topSellerCars: state.HomeReducer.topSellerCars,
  topViewCars: state.HomeReducer.topViewCars,
  topNewCars: state.HomeReducer.topNewCars
})

const mapDispatchToProp = dispatch => ({
  fetchMenu: () => dispatch(MenuAction.fetchMenu()),
  fetchTopsCar: () => dispatch(ProductAction.fetchTops()),
  fetchDetail: (idCar) => dispatch(ProductAction.fetchDetail(idCar))
});

export default connect(mapStateToProp, mapDispatchToProp)(Home);

