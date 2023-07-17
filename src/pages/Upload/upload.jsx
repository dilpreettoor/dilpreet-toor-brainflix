import React, { useState } from 'react';
import uploadimg from '../../assets/images/Upload-video-preview.jpg';
import Header from '../../components/header/header';
import '../Upload/upload.scss';

const Upload = () => {
  // State variables to store the title and description inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle changes in the title
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Function to handle changes in the description
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // Function to handle the Publish button click 
  const handlePublish = () => {
    // Create a JSON object with the data to be sent to the server
    const videoData = {
      title: title,
      description: description,
    };

    // Make the POST request using fetch
    fetch('http://localhost:5050/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(videoData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Video published:', data);
        // Reset the input fields
        setTitle('');
        setDescription('');
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error publishing video:', error);
      });
  };

  return (
    <div>
      <Header />
      <section className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
        <div className='upload__wrapper'>
          <div className='upload__thumbnail-wrapper'>
            <h2 className='upload__thumbnail-title'>VIDEO THUMBNAIL</h2>
            <img className='upload__thumbnail' src={uploadimg} alt='👾' />
          </div>
          <div className='upload__video-details'>
            <h2 className='upload__video-title'>TITLE YOUR VIDEO</h2>
            <input
              className='upload__video-title--text'
              placeholder='Add a title to your video'
              value={title}                 
              onChange={handleTitleChange}  
            />

            <h2 className='upload__video-desc'>ADD A VIDEO DESCRIPTION</h2>
            <textarea
              className='upload__video-desc--text'
              placeholder='Add a description to your video'
              value={description}           
              onChange={handleDescriptionChange}  
            />
          </div>
        </div>
        <div className='upload__button-wrap'>
          <button className='upload__publish-btn' onClick={handlePublish}>  
            PUBLISH
          </button>
          <button className='upload__cancel-btn'>CANCEL</button>
        </div>
      </section>
    </div>
  );
};

export default Upload;
