import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListProduct from '../../components/list-product';

class GalleryCar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <CustomMenu menu={this.props.menu}/>
            </div>
            <div className='col-md-10'>
              <ListProduct 
                cars={this.props.topViewCars}
                title="Top xem nhiều"
                fetchDetail={this.props.fetchDetail}
              />
            </div>
          </div>
        </div>        
      </div>
    )
  }
}

const mapStateToProp = (state) => ({
  cars: state.GalleryCarReducer.car,
});

const mapDispatchToProp = dispatch => ({
 fetchCars: (field, value, size, page) => dispatch(ProductAction.fetchGalleryCars(type, idCar)),
})