import './videoslist.scss';


function VideosList(props) {
    return (
        <section className='videolist'>
            <h2 className='videolist__title'>NEXT VIDEOS</h2>

            <div className='videolist__wrapper'>
            {props.videos
          .filter((video) => video.id !== props.selectedVideo.id)
          .map((video) => (
                <div key={video.id} className='videolist__video-container' onClick={() => props.handleSelectVideo(video.id)}>
                    <img className='videolist__video-img' src={video.image}>
                    </img>

                    <div className='videolist__video-details'>
                        <p className='videolist__video-title'>{video.title}</p>
                        <p className='videolist__video-channel'>{video.channel}</p>
                    </div>
                </div>
                ))}
            </div>



            

    
        </section>
    )
}

export default VideosList;