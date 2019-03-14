import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tweet from './components/Tweet';
import Divider from './components/Divider';
import InputField from './components/InputField';
import PrimaryBtn from './components/PrimaryBtn';
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
		}],
		textareaRows: 1,
		textareaHeight: 0
	}

	onChangeText = (e) => {
		let textareaHeight = e.target.scrollHeight;
		let val = e.target.value;
		let textareaRows = this.state.textareaRows;

		if (textareaHeight > this.state.textareaHeight && this.state.textareaHeight)
			textareaRows++;

		this.setState({ 
			newTweet: val,
			textareaHeight,
			textareaRows
		});
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
		const tweets = this.state.tweets.map((item, index) => {
			let separator = index < this.state.tweets.length ? (<Divider />) : null;
			return (
				<div key={item.id}>
					<Tweet 
						key={item.id}
						user={item.user}
						time={item.time}
						content={item.content}
					/>
					{separator}
				</div>
			)
		});

		return (
			<div className="app">
				<Navbar />
				<div className='content'>
					<form>
						<InputField 
							placeholder="What's happening?"
							rows={this.state.textareaRows}
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
			</div>
		);
	}
}

export default App;