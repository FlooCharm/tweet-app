import React, { Component } from 'react';
import './Card.css';
import CircleImg from '../CircleImg';

class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="img-container">
					<CircleImg />
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default Card;