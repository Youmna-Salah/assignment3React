import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import VideoList from './VideoList';
import VideoPreview from './VideoPreview';

import './index.css';

/* API information */

const API_KEY = "AIzaSyCPQZ7N1L0LEzFiZHSTkoJLbE0fgFpv8Hk";

const API_URL = 'https://www.googleapis.com/youtube/v3/search';

let params = {
    part: 'snippet',
    key: API_KEY,
    q: "",
	type: 'video',
	maxResults: 20
};

/******************/


class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			activeVideo: {}
		}

		this.searchVideos = this.searchVideos.bind(this);
		this.clicked = this.clicked.bind(this);

	}

	searchVideos(event){
		event.preventDefault();
		let keyword = this.refs.keyword.value;
		params.q = keyword;

		axios.get(API_URL, {params: params}).then(response => {
			this.setState({videos: response.data.items});
			this.setState({activeVideo: response.data.items[0]});
		});
	}
	clicked(video){
		event.preventDefault();
		console.log("clicked"+ video.id);
		this.setState({activeVideo: video});
}

	render(){
		return(
			<div className="searchContainer">
				<form className="search" onSubmit={this.searchVideos}>
					<img className="logo" src="https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png" alt={"Mountain View"} />
					<input className="searchbar" ref="keyword" type="text"/>
				</form>
				<div className="main-content">
					<VideoList videos={this.state.videos} clickd={this.clicked} />
										<VideoPreview videos={this.state.videos} active={this.state.activeVideo}/>

				</div>
			</div>
		)
	}
}


ReactDOM.render(<App></App>, document.getElementById('root'));


