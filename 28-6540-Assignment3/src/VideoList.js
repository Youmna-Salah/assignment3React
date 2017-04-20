import React from 'react';

var VideoList=function(props){
	console.log(props);
	return(
		<div className="container" key="100">
		<ul key="200">
		{props.videos.map((video, i) => 
			<div className="elementList">
			<li key={i+1000} onClick={()=>{props.clickd(video)}}>
			<img id="img"  key={i+video.id.videoId} src={video.snippet.thumbnails.default.url} alt={"Mountain View"} />
			<h6 className="titleList" key={i}>{video.snippet.title} </h6>
			</li>
			<div className="clear"></div>
			</div>
			)}
		</ul>
		</div>
		)
}  

export default VideoList;


