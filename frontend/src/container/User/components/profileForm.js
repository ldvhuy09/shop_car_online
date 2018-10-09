import React, { Component } from 'react';
import InputForm from '../../../components/form/inputForm';
import SelectForm from '../../../components/form/selectForm';
import { Button, Card } from 'mdbreact';

export default class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: true,
      phone: '',
      address: ''
    }
  }

  handleInput = (field, value) => {
    this.setState({
      [field]: value
    })
  }

  handleOnSubmit = () => {
    this.props.updateProfile(this.state)
  }

  render() {
    return (
      <Card className='container'>
        <div className='container mt-3'>
          <form className='form-group' onSubmit={this.handleOnSubmit}>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <InputForm label='Tên' field='name' inputValue={this.handleInput}/>
              </div>
              <div className='col-md-12 col-sm-12'>
                <SelectForm label='Giới tính' field='gender' inputValue={this.handleInput}/>
              </div>
              <div className='col-md-12 col-sm-12'>
                <InputForm label='Số điện thoại' field='phone' inputValue={this.handleInput}/>
              </div>
              <div className='col-md-12 col-sm-12'>
                <InputForm label='Địa chỉ' field='address' inputValue={this.handleInput}/>
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
