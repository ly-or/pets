import React from 'react';
import './Banner.css'

function Banner() {
    return (
        <div id="hero">
            <span className='hero-left'>

            <h6>Welcome to Pet Expo</h6>
            <h3>WORLD'S <span id="best-place">BEST PLACE</span> FOR PET SERVICES</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='btn-container'>

            <button className='btn-service'>Our Services</button>
            <button className='btn-contact'>Contact Us</button>
            </div>
            </span>
            <span className='hero-right'>
                <img src='banner-img.webp' />

            </span>
        </div>
    );
}

export default Banner;
