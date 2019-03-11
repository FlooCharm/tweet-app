import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
	render() {
		return (
			<input 
				className='input-field'
				value={this.props.value}
				onChange={this.props.onChange}
				type='text'
				placeholder={this.props.placeholder}
			/>
		);
	}
}

export default InputField;
