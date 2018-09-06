import React, { Component } from 'react';
import SelectForm from './selectForm';
import NumberSelectForm from './numberSelectForm';
import { PRICE_RANGE } from '../../constants/api';
import { Card, Button } from 'mdbreact';
import DateForm from './dateForm';
import InputForm from './inputForm';


export default class SearchForm extends Component {
  constructor(props) {
    super(props);
  }  

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.props.form, 1);
  }

  render() {
    let types = this.props.types ? this.props.types.map(type => type.name): [];
    let brands = this.props.brands ? this.props.brands.map(brand => brand.name): [];
    return (
      <Card className='container'>
        <div className='container mt-3'>
          <form className='form-group' onSubmit={this.handleOnSubmit}>
            <div className='row'>
              <div className='col-md-3 col-sm-12'>
                <InputForm label='Tên' field='name' selectOption={this.props.selectOption}/>
              </div>
              <div className='col-md-2 col-sm-6'>
                <SelectForm label='Loại xe' field='type' options={types} selectOption={this.props.selectOption}/>
              </div>
              <div className='col-md-2 col-sm-6'>
                <SelectForm label='Hãng xe' field='brand' options={brands} selectOption={this.props.selectOption}/>
              </div>
              <div className='col-md-1 col-sm-12'>
                <NumberSelectForm label='Giá từ' field='minPrice' options={PRICE_RANGE} unit={1000000000} selectOption={this.props.selectOption}/>
              </div>
              <div className='col-md-2 col-sm-6'>
                <DateForm label='Nhập từ ngày' field='fromDate' selectOption={this.props.selectOption}/>
              </div>
              <div className='col-md-2 col-sm-6'>
                <DateForm label='Đến ngày' field='toDate' selectOption={this.props.selectOption}/>
              </div>
            </div>
            <div className='row'>
              <Button className='center-horizontal' type='submit' >Tìm kiếm</Button>
            </div>
          </form>
        </div>
      </Card>
    )
  }
}
