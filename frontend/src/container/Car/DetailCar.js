import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListProduct from '../../components/list-product';
import DetailInforProduct from './components/detailInfor';
import ProductAction from '../../actions/productAction';

class DetailCar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var idCar = this.props.match.params.id;
    this.props.fetchDetail(idCar);
  }

  componentWillReceiveProps(nextProps) {
    let car = nextProps.car;
    if (car.id && car.id !== this.props.car.id) {
      this.props.fetchSameBrandCars(car.brand, car.id);
      this.props.fetchSameTypeCars(car.type, car.id);
    }
  }

  componentWillUpdate(nextProps) {
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
            <DetailInforProduct car={this.props.car}/>
          </div>
          <main>
            <div className='container'>
              <div className='row'>
                <ListProduct 
                  cars={sameTypeCars}
                  title="Cùng loại xe"
                />
              </div>
              <div className='row'>
                <ListProduct 
                  cars={sameBrandCars}
                  title="Cùng thương hiệu"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
		);
	}
}


const mapStateToProp = (state) => ({
   sameTypeCars: state.DetailCarReducer.sameTypeCars,
   sameBrandCars: state.DetailCarReducer.sameBrandCars,
   car: state.DetailCarReducer.car,
});

const mapDispatchToProp = dispatch => ({
  fetchSameTypeCars: (value, idCar) => dispatch(ProductAction.fetchSameTypeCars(value, idCar)),
  fetchSameBrandCars: (value, idCar) => dispatch(ProductAction.fetchSameBrandCars(value, idCar)),
  fetchDetail: (idCar) => dispatch(ProductAction.fetchDetail(idCar)),

})

export default connect(mapStateToProp, mapDispatchToProp)(DetailCar);
