import React from "react";
// import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import TypingEffect from "../Typeeffect/Typeeffect";
import "../Home/Home.css";
import myImage from "../assest/profile_pic.jpg";
import Imagecontainer from "../../comman/imagecontainer";
// import ImageComponent from '/ImageComponent'

const Home = () => {
  // const ImageComponent=(src,alt) => {
  //     return <img src={myImage} alt="Archana Kumari" />
  // }
  const GmailStyle = { color: "Red" };
  return (
    <div className="container" id="Home">
      <div className="main_class">
        <div className="Home_container">
          <div className="greeting_name">
            <h1>
              Hi,I'm
              <br /> Archana kumari
            </h1>
          </div>
          <div className="typingeffect">
            <div className="typo">
              <TypingEffect />
            </div>
          </div>
          <div className="contact-icons">
            <i class="fab fa-linkedin"></i>
            <i class="fa-brands fa-square-github"></i>
            <SiGmail style={GmailStyle} />
            {/* <FaLinkgedin />
            <FaGithubSquare />
          */}
          </div>
          {/* <div class="text-box">
        <div class="fixed-text">I am a</div>
        <div class="animate-text">
          <div>
            <span>Just getting started</span>
            <span>Front-end Developer</span>
            <span>Django Developer</span>
            
           </div>	
        </div>

    </div> */}
        </div>
        <Imagecontainer src={myImage} alt="archana" />
      </div>
    </div>
  );
};

export default Home;
