import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';
import Tweet from './components/Tweet';
import Divider from './components/Divider';
import InputField from './components/InputField';
import PrimaryBtn from './components/PrimaryBtn';
import moment from 'moment';

class App extends Component {
	state = {
		user: '',
		avatar: '',
		newTweet: '',
		tweets: [],
		textareaRows: 1,
		textareaHeight: 0,
		showBtn: false,
		error: false,
		isLoaded: false
	}

	componentDidMount () {
		fetch('https://still-garden-88285.herokuapp.com/draft_tweets')
			.then(response => response.json())
			.then((res) => {
				this.setState({ 
					tweets: res.draft_tweets.reverse(),
					isLoaded: false
				})
			}, (error) => {
				this.setState({
					isLoaded: false,
					error: true
				})
			});
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

	onNameChange = (e) => {
		let val = e.target.value;
		this.setState({
			user: val
		});
	}

	onTextareaFocus = () => { 
		if (!this.state.newTweet)
			this.setState({ 
				textareaRows: 3,
				showBtn: true
			}); 
	}
	onTextareaBlur = () => { 
		if (!this.state.newTweet)
			this.setState({ 
				textareaRows: 1, 
				showBtn: false
			});
	}

	tweet = (e) => {
		e.preventDefault();

		let created_at = new Date();
		let updated_at = new Date();
		let description = this.state.newTweet;
		let tweets = this.state.tweets;
		let avatar = this.state.avatar;

		let data = {
			avatar,
			user_name: this.state.user,
			description,
			created_at,
			updated_at,
		}

		// fetch('https://still-garden-88285.herokuapp.com/draft_tweets', {
		fetch('http://192.168.100.7:3000/draft_tweets', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then((res) => {
				let { id, avatar, user_name, description, created_at } = res.draft_tweet;
				tweets.unshift({
					id,
					avatar,
					user: user_name,
					description,
					time: created_at
				});
				this.setState({ 
					tweets, 
					newTweet: '',
					textareaRows: 1,
					showBtn: false
				});
			}, (error) => {
				this.setState({
					isLoaded: false,
					error: true
				})
			});
	}

	render() {
		const tweets = this.state.tweets.map((item, index) => {
			let separator = index < this.state.tweets.length ? (<Divider />) : null;
			let createdAt = moment(item.created_at).format('DD/MM/YYYY, HH:mm');
			return (
				<div key={item.id}>
					<Tweet 
						avatar={item.avatar}
						key={item.id}
						user={item.user_name}
						time={createdAt}
						content={item.description}
					/>
					{separator}
				</div>
			)
		});

		return (
			<div className="app">
				<Navbar />
				<div className='content flex row justify-content-center'>
					<div className='flex column'>
						<UserInfo onChange={this.onNameChange}/>
					</div>
					<div className='flex flex07 column'>
						<form className="form-container flex column align-items-flex-end">
							<InputField 
								placeholder="What's happening?"
								rows={this.state.textareaRows}
								value={this.state.newTweet}
								onFocus={this.onTextareaFocus}
								onBlur={this.onTextareaBlur}
								onChange={this.onChangeText}
							/>
							{ this.state.showBtn && <PrimaryBtn 
								text="Tweet"
								type="submit"
								disabled={(!this.state.newTweet && !this.state.user) ? true: false }
								onClick={this.tweet}
							/> }
						</form>
						<Divider />
						<div className="margin-bottom">
							{tweets}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;