import './hero.scss';


function Hero(props) {
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