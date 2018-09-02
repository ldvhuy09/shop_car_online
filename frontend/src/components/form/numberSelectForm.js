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
        <NumberFormat value={option} displayType={'text'} thousandSeparator={true}/>
      </option>
    ))
  }

	render() {
    let options = this.listOptions(this.props.options);
		return (
			<div className="form-group">
        <select className="custom-select browser-default" onChange={this.handleSelectOption}>
          {options}
        </select>
      </div>
		);
	}
}
export default NumberSelectForm;

