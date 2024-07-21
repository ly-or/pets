import React from 'react';
import './About.css'

function About() {
    return (
      <div id="about">
        <div className="leftSide">
          <h2>About The Project</h2>
          <p>
            "A demo project made with React where we recieve information about different types of pets throughout the implementation of an API."
          </p>
        </div>
        <div className="rightSide">
          <img src="photo2.webp" alt="About Us" />
        </div>
      </div>
    );
}

export default About;
