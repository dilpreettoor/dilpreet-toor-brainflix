import logo from '../../assets/logo/BrainFlix-logo.svg';
import profile from '../../assets/images/Mohan-muruge.jpg'
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className='header-nav'>
           <a href='/' className='header-nav__logo'>
        <img src={logo} alt='Brainflix logo' />
           </a>
            <div 
            className='header-nav__wrapper'>
           <div 
           className='header-nav__search'>
                <input 
                className='header-nav__search-input'
                placeholder='Search'
                type='text'>
                </input>

                <img
                className='header-nav__profile-photo'
                src={profile}
                alt='profile picture'>
                </img>

                

           </div>
           <Link
           to="/upload"
           className='header-nav__upload-btn'>
            UPLOAD
           </Link>

                <img
                className='header-nav__profile-tablet'
                src={profile}
                alt='profile picture'>
                </img>
                </div>

           

        </header>
    )

}

export default Header;