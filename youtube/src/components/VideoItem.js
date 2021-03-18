import React from 'react';
import './VideoItem.scss';


const VideoItem =({video, onVideoSelect})=>{
    return (
        <div onClick={()=>{onVideoSelect(video)}} className='video-item item'>
            <video src={video.snippet.thumbnails.medium.url} width="900px" height="600px"/>
            {/*<img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.medium.url}/>*/}
            <div className='content'>
                <div className='header'> {video.snippet.title} </div>
            </div>

        </div>
    );

};
export default VideoItem;