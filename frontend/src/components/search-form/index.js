import React, { Component } from 'react';
import SelectForm from '../form/selectForm';
import NumberSelectForm from '../form/numberSelectForm';
import { PRICE_RANGE } from '../../constants/api';
import { Card, CardBody } from 'mdbreact';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
  }  

  componentWillMount() {

  }

  render() {
    return (
      <Card className='container'>
        <div className='container mt-3'>
          <form className='form-group' onSubmit={this.handleOnSubmit}>
            <div className='row'>
              <div className='col-md-4 col-sm-12'>
                <label>Tên</label>
                <input className='form-control'></input>
              </div>
              <div className='col-md-2 col-sm-6'>
                <label>Loại xe</label>
                <SelectForm field='type' options={[]}/>
              </div>
              <div className='col-md-2 col-sm-6'>
                <label>Hãng xe</label>
                <SelectForm field='brand' options={[]}/>
              </div>
              <div className='col-md-2 col-sm-12'>
                <label>Giá thấp nhất</label>
                <NumberSelectForm field='minPrice' options={PRICE_RANGE}/>
              </div>
              <div className='col-md-2 col-sm-12'>
                <label>Giá cao nhất</label>
                <NumberSelectForm field='maxPrice' options={PRICE_RANGE}/>
              </div>
            </div>
          </form>
        </div>
      </Card>
    )
  }
}
