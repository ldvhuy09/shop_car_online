import React, { Component } from 'react';

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.props.selectOption(this.props.field, event.target.value);
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className='form-group'>
        <label>{this.props.label}</label>
        <input className='form-control' onChange={this.handleChange}></input>
      </div>
    )
  }
}
