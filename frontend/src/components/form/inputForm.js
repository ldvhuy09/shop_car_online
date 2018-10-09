import React, { Component } from 'react';

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }


    handleChange = (event) => {   
        var parent = this._reactInternalFiber._debugOwner.stateNode;
        this.setState({
                text: event.target.value
            },
            parent.handleChange(event.target.name, event.target.value)
        ) 
    } 

    render() {
        return (
            <div className='form-group'>
                <label>{this.props.label}</label>
                <input 
                    name={this.props.field} 
                    onChange={this.handleChange}
                    className={this.props.classForForm || 'form-control'} 
                    type={this.props.type} placeholder={this.props.placeholder}>
                </input>
                { 
                    this.props.errorMessage && 
                    <div className="invalid-feedback">{this.props.errorMessage}</div> 
                }
            </div>
        )
    }
};
