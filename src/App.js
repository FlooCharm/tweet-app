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

		let time = new Date();
		let content = this.state.newTweet;
		let tweets = this.state.tweets;
		tweets.unshift({
			id: tweets.length + 1,
			user: this.state.user,
			content,
			time
		});
		this.setState({ 
			tweets, 
			newTweet: '',
			textareaRows: 1,
			showBtn: false
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