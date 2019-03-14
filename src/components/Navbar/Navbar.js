import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className='navbar'>
				<img
					className='icon'
					src='http://www.logospng.com/images/2/twitter-logo-vector-by-oguzhanbahardesign-on-deviantart-2414.png'
				/>
			</div>
		);
	}
}

export default Navbar;