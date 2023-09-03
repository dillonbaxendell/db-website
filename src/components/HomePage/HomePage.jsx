import React from 'react';
import './HomePage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function HomePage() {
  return (
    <div className="container">
        <div className="header-content">
            <div className="left-content">
                <p>hi, my name is</p>
                <h1>Dillon Baxendell</h1>
                <p>frontend developer and theatre artist</p>
                <a href="#contact" className="btn" id="getInTouch">Get in Touch</a>
            </div>
            <div className="right-content">
                <div className="image-container">
                    <img src="/images/dillon.PNG" alt="Dillon Baxendell"/>
                    <div className="overlay"></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage;