import Header from './components/header/header';
import Hero from './components/hero/hero';
import VideoInfo from './components/videoDetails/videoInfo';
import videoDetailsJSON from '../src/data/video-details.json';


import './App.css';
import { useState } from 'react';

function App() {

  const [videosData] = useState(videoDetailsJSON);
  const [selectedVideo, setSelectedVideo] = useState(
    videoDetailsJSON[0]
  );

  console.log(selectedVideo);

  return (
    <div className="App">
      <Header/>
      <Hero selectedVideo={selectedVideo}/>
      <VideoInfo selectedVideo={selectedVideo}/>
      
    </div>
  );
}

export default App;
