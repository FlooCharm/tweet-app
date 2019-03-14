import React, { Component } from 'react';
import './UserInfo.css';
import defaultImg from '../../assets/default-avatar.png'

class UserInfo extends Component {
	render() {
		return (
			<div className='container'>
				<div className='circle'>
					<img src={this.props.img || defaultImg} alt=''/>
				</div>
			</div>
		);
	}
}

export default UserInfo;