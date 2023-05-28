import Header from './components/header/header';
import Hero from './components/hero/hero';
import VideoInfo from './components/videoDetails/videoInfo';
import videoDetailsJSON from '../src/data/video-details.json';
import Comments from './components/Comments/comments';
import VideosList from './components/videoslist/videoslist';


import './App.css';
import { useState } from 'react';

function App() {

  const [videosData] = useState(videoDetailsJSON);
  const [selectedVideo, setSelectedVideo] = useState(
    videoDetailsJSON[0]
  );

  const handleSelectVideo = (id) => {
    videosData.forEach((video) => {
      if (id === video.id) {
        setSelectedVideo(video);
        console.log(video);
      }
    });
  }

 


  return (
    <div className="App">
      <Header/>
      <Hero selectedVideo={selectedVideo}/>
      <VideoInfo selectedVideo={selectedVideo}/>
      <Comments selectedVideo={selectedVideo}/>
      <VideosList selectedVideo={selectedVideo} videos={videosData} handleSelectVideo={handleSelectVideo}/>
      
    </div>
  );
}

export default App;
