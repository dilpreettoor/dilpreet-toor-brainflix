import './videoInfo.css';


function VideoInfo(props) {
    const date = new Date(props.selectedVideo.timestamp);
    const formatedDate = date.toLocaleDateString('en-US');
    return (
        <section className='hero-info'>
            <h1 
            className='hero-info__title'>{props.selectedVideo.title}</h1>
            <div
            className='hero-info__wrapper'>
                <div
                className='hero-info__wrapper-left'>
                    <h2
                    className='hero-info__channel'>By {props.selectedVideo.channel}</h2>
                    <p
                    className='hero-info__date'> {formatedDate} </p>
                </div>

                <div
                className='hero-info__wrapper-right'>
                    <p
                    className='hero-info__views'> {props.selectedVideo.views} </p>
                    <p
                    className='hero-info__likes'> {props.selectedVideo.likes} </p>
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