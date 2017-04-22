import React from 'react';

function VideoPreview(props){
	var currVideoList = props.videos;
	var url = "https://www.youtube.com/embed/";
	var first = (typeof currVideoList[0] !=="undefined")?currVideoList[0].id.videoId:"Player";
    url = (first!=="Player")?url.concat(first):"";
	var description = (typeof currVideoList[0] !=="undefined")?currVideoList[0].snippet.description:"Player";
	var title = (typeof currVideoList[0] !=="undefined")?currVideoList[0].snippet.title:"";
	var channel = (typeof currVideoList[0] !=="undefined")?currVideoList[0].snippet.channelTitle:"";
	if(first == "Player")
		return(<div className="emptyvideoPreview">Player
		</div>)
	
	else
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