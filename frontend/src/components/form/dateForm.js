import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class DateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: ''
    }
  }
 
  handleChange = (date) => {
    console.log(date);
    let year = date._d.getFullYear();
    let month = date._d.getMonth() + 1;
    let day = date._d.getDay();
    this.props.selectOption(this.props.field, `${year}-${month}-${day}`);
    this.setState({
      startDate: date
    })

  }

  render() {
    return (
      <div className='form-group'>
        <label>{this.props.label}</label>
        <DatePicker className='form-control' dateFormat="YYYY/MM/DD" selected={this.state.startDate} onChange={this.handleChange}/>
      </div>
    )
  }
}
