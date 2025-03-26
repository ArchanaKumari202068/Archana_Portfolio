import React from "react";
import myImage from "../assest/profile_pic.jpg";
import Imagecontainer from "../../comman/imagecontainer";
import { SiGmail } from "react-icons/si";
import "./about.css";
import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref: myRef, inView: isMyElementInView } = useInView();
  const GmailStyle = { color: "Red" };
  return (
    <div className="container" id="About">
      <div className="main-about-container" ref={myRef}>
        <div
          className={`para ${
            isMyElementInView ? "i-am-visible" : "left-element"
          }`}
        >
          <h1>About me</h1>
          <p>
            Hi, I’m Archana Kumari, a passionate
            web developer skilled in the MERN stack (MongoDB, Express.js,
            React.js, Node.js). I love building responsive, dynamic websites
            that offer seamless user experiences. With hands-on experience in
            creating projects like e-commerce platforms and dashboards, I’m
            always eager to learn, grow, and contribute to impactful tech
            solutions.
          </p>
        </div>
        <div className="about_section">
          <div className="about_img">
            <Imagecontainer src={myImage} alt="archana" />
          </div>
          <div
            className={`about-icons ${
              isMyElementInView ? "i-am-visible" : "right-element"
            }`}
          >
            <a href="https://www.linkedin.com/in/archana-kumari-66a233239/">
              <i class="fab fa-linkedin"></i>{" "}
            </a>
            <a href="https://github.com/ArchanaKumari202068">
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a href="mailto:archanakumari202068@gmail.com">
              <i>
                <SiGmail style={GmailStyle} />
              </i>
            </a>
            {/* <FaLinkgedin />
              <FaGithubSquare />
            */}
          </div>
        </div>

        {/* <div contact_icons></div> */}
      </div>
    </div>
  );
};

export default About;
