import React from "react";
import './hero.css';


function Hero(props) {
  
  if (!props.selectedVideo) {
    return <div>Loading...</div>; 
  }
    return (
        <section className='hero-video'>
          <video 
          className='hero-video__poster'
          src="https://via.placeholder.com/640x360"
          poster={props.selectedVideo.image} controls></video>
        </section>
    )
}

export default Hero;