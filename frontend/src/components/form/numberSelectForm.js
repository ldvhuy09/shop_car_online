import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class NumberSelectForm extends Component {
	constructor(props) {
    super(props);

  }
  
  handleSelectOption = (event) => {
    this.props.selectOption(this.props.field, event.target.value);
  }

  listOptions(options) {
    return options.map((option, key) => (
      <option value={option} key={key}>
        <NumberFormat value={option / this.props.unit} displayType={'text'} thousandSeparator={true}/>
      </option>
    ))
  }

	render() {
    let options = this.listOptions(this.props.options);
		return (
			<div className="form-group">
        <label>{this.props.label}</label>
        <select className="custom-select browser-default" onChange={this.handleSelectOption}>
          <option value=''></option>
          {options}
        </select>
      </div>
		);
	}
}
export default NumberSelectForm;

