import { useParams, useNavigate } from 'react-router-dom';
import React, {useState, useEffect } from "react";
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import VideoInfo from '../../components/videoDetails/videoInfo';
import Comments from '../../components/Comments/comments';
import VideosList from '../../components/videoslist/videoslist';


const Home = ({ videosData, selectedVideo, handleSelectVideo }) => {
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    if (selectedVideo) {
      navigate(`/${selectedVideo.id}`);
      handleSelectVideo(selectedVideo.id);
    }
  }, [id, selectedVideo, navigate]);


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
