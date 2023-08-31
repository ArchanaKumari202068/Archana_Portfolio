import React from "react";
import myImage from "../assest/profile_pic.jpg";
import Imagecontainer from "../../comman/imagecontainer";
import './about.css'

const About = () => {
  return (
    <div className="container" id="About">
      <div className="main-about-container">
      <div className="para">
        <h1>About me</h1>
        <p>
          I am a full-stack web developer, pursuing my B.Tech in Computer Science
          &amp; Engineering from Central University of Haryana. I strive to make
          meaningful websites with the best UI practices and I love to know about
          technologies and pretty much excited to learn new things of modern
          technical world.
        </p>
      </div>
      <div className="about_img">
      <Imagecontainer src={myImage} alt="archana" />

      </div>
      </div>
    </div>
  );
};

export default About;
