import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Text from './Text';

class App extends Component {
	render() {
		return (
			<div>
				<Card />
				<Text 
					text='CUACCC'
				/>
			</div>
		);
	}
}

export default App;