import React from "react";
import "./HomePage.css";
import Experiences from "./Experiences/Experiences";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function HomePage() {
  return (
    <div className="container">
      <div className="content" id="header">
        <div className="left-content">
          <h3>hello, my name is</h3>
          <h1 id="name-title">Dillon Baxendell</h1>
          <h3>I'm a frontend developer and theatre artist</h3>
          <a href="#contact" className="btn" id="getInTouch">
            Get in Touch
          </a>
        </div>
        <div className="right-content">
          <div className="image-container">
            <img src="/images/dillon.PNG" alt="Dillon Baxendell" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>

      <div className="content" id="about">
        <div>
          <h2 id="about-title">ABOUT</h2>
          <p>
            My name is Dillon Baxendell. I’m a frontend software engineer &
            freelance web developer in Los Angeles -- with roots in digital
            marketing & SEO. I'm passionate about music, technology and
            basically everything that makes the internet tick.
          </p>
          <p>
            My work currently consists of a full time engineering role at The
            Noun Project (working on Lingo) & managing ongoing freelance clients
            and side projects. I find this balancing act to be super resourceful
            in terms my learning as a web developer, as well as for keeping up
            with the rapid expansion of developer tools, libraries, frameworks,
            etc.
          </p>
          <p>
            My freelance web development roots are in Wordpress & Shopify, of
            which I'm self taught. In 2017, I started at UCLA to broaden my
            knowledge of the Node.js ecosystem. Since then, I fell in love with
            & have been primarily using React & Redux in web applications. For
            static sites, I love using Gatsby for creating blazing fast,
            SEO-driven headless frontend user interfaces.
          </p>
          <p>
            Whether you're a business owner looking to get started on a app or
            web development project with a freelance web developer, a developer
            looking to collaborate on something cool, or just wanting to say hi,
            shoot me a message and let's work together.
          </p>
        </div>
      </div>

      <div className="content" id="experience">
        <div>
          <h2 id="experience-title">EXPERIENCE</h2>
          <Experiences />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
