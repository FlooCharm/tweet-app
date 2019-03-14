import React, { Component } from 'react';
import './UserInfo.css';
import defaultImg from '../../assets/default-avatar.png'

class UserInfo extends Component {
	render() {
		return (
			<div className='container flex column'>
				<div className='blue-container'/>
				<div className='txt-container'>
					<div className='info-circle margin-right'>
						<img src={this.props.img || defaultImg} alt=''/>
					</div>
					<input className='name-input' placeholder="Escribe tu nombre" onChange={this.props.onChange}/>
				</div>
			</div>
		);
	}
}

export default UserInfo;