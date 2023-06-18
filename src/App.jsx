import { BrowserRouter, Routes, Route } from 'react-router-dom';
import videoDetailsJSON from '../src/data/video-details.json';
import React, {useEffect, useState } from "react";
import axios from "axios";
import Home from './pages/Home/home';
import Upload from './pages/Upload/upload';
import './App.css';

function App() {

  const [videosData] = useState(videoDetailsJSON);
  const [selectedVideo, setSelectedVideo] = useState(
    videoDetailsJSON[0]
  );

  useEffect(() => {

  })

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home videosData={videosData} selectedVideo={selectedVideo} handleSelectVideo={handleSelectVideo} />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
