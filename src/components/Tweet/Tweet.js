import React, { Component } from 'react';
import './Tweet.css';

import CircleImg from '../CircleImg';
import Text from '../Text';

class Tweet extends Component {
	render() {
		return (
			<div className="card">
				<div className="img-container">
					<CircleImg
						img={this.props.avatar}
					/>
				</div>
				<div className="flex column">
					<div className="flex row">
						<div className="margin-right">
							<Text 
								weight='bold'
								color='white'
								text={this.props.user}
							/>
						</div>
						<Text 
							color='grey'
							text={this.props.time}
						/>
					</div>
					<Text 
						color='white'
						text={this.props.content}
					/>
				</div>
			</div>
		);
	}
}

export default Tweet;