import React from 'react';
import uploadimg from '../../assets/images/Upload-video-preview.jpg'
import Header from '../../components/header/header';
import '../Upload/upload.scss';


const Upload = () => {
  return (
    <div>
      <Header/>
      <section className='upload'>
        
        <h1 className='upload__title'>
            Upload Video
        </h1>
        <div className='upload__wrapper'>
        <h2 className='upload__thumbnail-title'>
            VIDEO THUMBNAIL
        </h2>
        <img className='upload__thumbnail' src={uploadimg} alt="👾"/>
        <div className='upload__video-details'>
          <h2 className='upload__video-title'>TITLE YOUR VIDEO</h2>
          <input className='upload__video-title--text' placeholder='Add a title to your video'/>

          <h2 className='upload__video-desc'>ADD A VIDEO DESCRIPTION</h2>
          <textarea className='upload__video-desc--text' placeholder='Add a description to your video'/>
        </div>
        </div>
        <div className='upload__button-wrap'>
          <button className='upload__publish-btn'>PUBLISH</button>
          <button className='upload__cancel-btn'>CANCEL</button>
        </div>
        
      </section>
    </div>
  );
}

export default Upload;
