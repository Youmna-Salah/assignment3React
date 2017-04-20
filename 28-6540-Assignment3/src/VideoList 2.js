import React from 'react';

var VideoList=function(props){
	console.log(props);
	return(
		<div className="container" key="100">
		<ul key="200">
		{props.videos.map((video, i) => 
			<div className="elementList">
			<li key={i+1000} onClick={() => {clicked(props,i,props.videos, true)}}>
			<img id="img"  key={i+video.id.videoId} src={video.snippet.thumbnails.default.url} alt={"Mountain View"} />
			<h6 className="titleList" key={i}>{video.snippet.title} </h6>
			</li>
			<div className="clear"></div>
			</div>
			)}
		</ul>
		</div>
		)
}.bind(this);  
function clicked(props,index, videos, flag){
	console.log(props);
	var url = "https://www.youtube.com/embed/";
	var first = (typeof videos[index] !=="undefined")?videos[index].id.videoId:"Player";
	var title = (typeof videos[index] !=="undefined")?videos[index].snippet.title:"";
	var channel = (typeof videos[index] !=="undefined")?videos[index].snippet.channelTitle:"";

	url = (first!=="Player")?url.concat(first):"";
	console.log(index+" "+ url);
	document.getElementById("iframe").src = url; 
	document.getElementById("description").innerHTML= videos[index].snippet.description; 
	document.getElementById("channelVP").innerHTML= videos[index].snippet.channelTitle;
	document.getElementById("titleVP").innerHTML= videos[index].snippet.title;


}

export default VideoList;


