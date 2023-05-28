import './videoslist.scss';


function VideosList(props) {
    const date = new Date(props.selectedVideo.timestamp);
    const formatedDate = date.toLocaleDateString('en-US');
    return (
        <section className='videoslist'>
            
        </section>
    )
}

export default VideosList;