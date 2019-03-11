import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="img-container">img</div>
				<div className="txt-container">txt</div>
			</div>
		);
	}
}

export default Card;