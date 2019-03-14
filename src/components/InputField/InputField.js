import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
	render() {
		return (
			<textarea 
				className='input-field'
				value={this.props.value}
				rows={this.props.rows}
				onChange={this.props.onChange}
				onFocus={this.props.onFocus}
				onBlur={this.props.onBlur}
				type='text'
				placeholder={this.props.placeholder}
			/>
		);
	}
}

export default InputField;
