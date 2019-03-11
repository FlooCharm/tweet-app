import React, { Component } from 'react';
import './CircleImg.css';
import defaultImg from '../assets/default-avatar.png'

class CircleImg extends Component {
	render() {
		return (
			<div className='circle'>
				<img src={this.props.img || defaultImg}/>
			</div>
		);
	}
}

export default CircleImg;