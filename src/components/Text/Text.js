import React, { Component } from 'react';
import './Text.css';

class Text extends Component {
	render() {
		let classes = `${this.props.color} ${this.props.weight} ${this.props.size || 'body'} text`
		return (
			<div className={classes}>
				{this.props.text}
			</div>
		);
	}
}

export default Text;
