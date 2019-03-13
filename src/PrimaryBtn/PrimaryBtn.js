import React, { Component } from 'react';
import './PrimaryBtn.css';

class PrimaryBtn extends Component {
	render() {
		return (
			<button 
				className="primary-btn"
				onClick={this.props.onClick}
				type='submit'
			>
				{this.props.text}
			</button>
		);
	}
}

export default PrimaryBtn;
