import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {useEffect, useState } from "react";
import axios from 'axios';
import Home from './pages/Home/home';
import Upload from './pages/Upload/upload';
import './App.css';

function App() {
  

  const [videosData, setVideosData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5050/videos');
        setVideosData(response.data);
        setSelectedVideo(response.data[0]); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    
  }, []);

  const handleSelectVideo = (id) => {
    const video = videosData.find((video) => video.id === id);
    
    if (video) {
      setSelectedVideo(video);
    }
  };

  return (
    <BrowserRouter>
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home videosData={videosData} selectedVideo={selectedVideo} handleSelectVideo={handleSelectVideo} setSelectedVideo={setSelectedVideo} />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/:id" element={<Home videosData={videosData} selectedVideo={selectedVideo} handleSelectVideo={handleSelectVideo} setSelectedVideo={setSelectedVideo} />} />
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
