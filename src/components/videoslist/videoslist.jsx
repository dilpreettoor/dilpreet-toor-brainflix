import './videoslist.scss';


function VideosList(props) {
    return (
        <section className='videoslist'>
            <h2 className='videoslist__title'>NEXT VIDEOS</h2>

            <div className='videolist__wrapper'>
                <div className='videolist__video-container'>
                    <img className='videolist__video-img' src={props.selectedVideo.image}>
                    </img>

                    <div className='videolist__video-details'>
                        <p className='videolist__video-title'>{props.selectedVideo.title}</p>
                        <p className='videolist__video-channel'>{props.selectedVideo.channel}</p>
                    </div>
                </div>
            </div>

    
        </section>
    )
}

export default VideosList;