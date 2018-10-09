import React, { Component } from 'react';

class SelectForm extends Component {
	constructor(props) {
    super(props);

  }
  
  handleInputValue = (event) => {
    this.props.inputValue(this.props.field, event.target.value);
  }

	render() {
    let options = this.props.options ? this.props.options.map((option, key) => (
      <option key={key} value={option}>{option}</option>
    )) : [];
		return (
			<div className="form-group">
        <label>{this.props.label}</label>
        <select className="custom-select browser-default" placeholder={this.props.placeholder} onChange={this.handleInputValue}>
          <option value=''></option>
          {options}
        </select>
      </div>
		);
	}
}
export default SelectForm;

