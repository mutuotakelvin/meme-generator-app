import React from 'react';
import './Header.scss'
import faceImg from './../../images/TrollFace.png'

const Header = () => {
    return (
        <div className='header'>
            <img className='header--image' src={faceImg} alt='app-logo'/>
            <h1 className='header--title' >Meme Generator</h1>
            <h3 className='header--project'>React Project</h3>
        </div>
    );
};

export default Header;