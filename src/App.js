import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Text from './Text';
import InputField from './InputField';
import PrimaryBtn from './PrimaryBtn';
import moment from 'moment';

class App extends Component {
	state = {
		newTweet: '',
		tweets: [{
			id: 1,
			user: 'Roberto Huerta',
			content: 'La Patata Kawaii :d',
			time: '13/03/2019, 15:12'
		}, {
			id: 2,
			user: 'Ricardo Martinez',
			content: 'Tengo sed de la mala :v',
			time: '10/03/2019, 14:05'
		}]
	}

	onChangeText = (e) => {
		let val = e.target.value;
		this.setState({ newTweet: val });
	}

	tweet = (e) => {
		e.preventDefault();

		let time = moment().format('DD/MM/YYYY, HH:mm');
		let content = this.state.newTweet;
		let tweets = this.state.tweets;
		tweets.unshift({
			id: tweets.length + 1,
			user: 'Jessica Sánchez',
			content,
			time
		});
		this.setState({ 
			tweets, 
			newTweet: ''
		});
	}

	render() {
		const tweets = this.state.tweets.map((item) =>
			<Card key={item.id}>
				<div className="flex column">
					<div className="flex row">
						<div className="margin-right">
							<Text 
								weight='bold'
								color='white'
								text={item.user}
							/>
						</div>
						<Text 
							color='grey'
							text={item.time}
						/>
					</div>
					<Text 
						color='white'
						text={item.content}
					/>
				</div>
			</Card>
		);

		return (
			<div className="app">
				<form>
					<InputField 
						placeholder="What's happening?"
						value={this.state.newTweet}
						onChange={this.onChangeText}
					/>
					<PrimaryBtn 
						text="Tweet"
						type="submit"
						disabled={!this.state.newTweet}
						onClick={this.tweet}
					/>
				</form>
				{tweets}
			</div>
		);
	}
}

export default App;