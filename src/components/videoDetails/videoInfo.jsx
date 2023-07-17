import React, { useEffect, useState } from "react";
import axios from "axios";
import './videoInfo.css';


function VideoInfo(props) {
  const [loading, setLoading] = useState(true);
  const [ videoinfo, setInfo ] = useState([]);

  useEffect(() => {
    if (props.selectedVideo) {
      axios
        .get(
          `http://localhost:5050/videos/${props.selectedVideo.id}`
        )
        .then((response) => {
          setInfo(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching comments:", error);
        });
    }
  }, [props.selectedVideo]);

    if (!props.selectedVideo || loading) {
        return null; 
      }
     
    const date = new Date(videoinfo.timestamp);
    const formatedDate = date.toLocaleDateString('en-US');
    return (
        <section className='hero-info'>
            <h1 
            className='hero-info__title'>{videoinfo.title}</h1>
            <div
            className='hero-info__wrapper'>
                <div
                className='hero-info__wrapper-left'>
                    <h2
                    className='hero-info__channel'>By {videoinfo.channel}</h2>
                    <p
                    className='hero-info__date'> {formatedDate} </p>
                </div>

                <div
                className='hero-info__wrapper-right'>
                    <p
                    className='hero-info__views'> {videoinfo.views} </p>
                    <p
                    className='hero-info__likes'> {videoinfo.likes} </p>
                </div>
            </div>
            <div
            className='hero-info__description'>
                <p
                className='hero-info__description--text'>
                    {props.selectedVideo.description}
                </p>

            </div>
        </section>
    )
}

export default VideoInfo;