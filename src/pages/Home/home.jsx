import React from 'react';
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import VideoInfo from '../../components/videoDetails/videoInfo';
import Comments from '../../components/Comments/comments';
import VideosList from '../../components/videoslist/videoslist';

const Home = ({ videosData, selectedVideo, handleSelectVideo }) => {
  return (
    <div>
      <Header/>
      <Hero selectedVideo={selectedVideo}/>
      <div className='main-content'>
        <div className="side-content">
          <VideoInfo selectedVideo={selectedVideo}/>
          <Comments selectedVideo={selectedVideo}/> 
        </div>
        <div className="side-content">
          <VideosList selectedVideo={selectedVideo} videos={videosData} handleSelectVideo={handleSelectVideo}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
