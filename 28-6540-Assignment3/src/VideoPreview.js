import React from 'react';

function VideoPreview(props){
	var currVideoList = props.videos;
	var current = props.active;
		console.log(typeof current.id);
	var url = "https://www.youtube.com/embed/";
	var first = (typeof current.id !=="undefined")?current.id.videoId:"Player";
    url = (first!=="Player")?url.concat(first):"";
	var description = (typeof current.id!=="undefined")?current.snippet.description:"Player";
	var title = (typeof current.id !=="undefined")?current.snippet.title:"";
	var channel = (typeof current.id !=="undefined")?current.snippet.channelTitle:"";

	return(
		<div className="videoPreview">
		<iframe id="iframe" width="560px"  height="315px" frameBorder="0" src={url} value={first} allowFullScreen>
		</iframe>
		<div id="details">
		<h4 className="titleVP" id="titleVP">{title} </h4>
		<br></br>
		<h5 className="channelVP" id="channelVP" >{channel} </h5>
		<p className="description" id="description">{description}</p>
		</div>
		</div>

		)
}
export default VideoPreview;