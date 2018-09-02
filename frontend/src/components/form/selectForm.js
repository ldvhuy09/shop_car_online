import React, { Component } from 'react';

class SelectForm extends Component {
	constructor(props) {
    super(props);

  }
  
  handleSelectOption = (event) => {
    //this.props.selectOption(this.props.field, event.target.value);
  }

	render() {
    let options = this.props.options ? this.props.options.map((option, key) => (
      <option key={key} value={option}>{option}</option>
    )) : [];
		return (
			<div className="form-group">
        <select className="custom-select browser-default" onChange={this.handleSelectOption}>
          {options}
        </select>
      </div>
		);
	}
}
export default SelectForm;

