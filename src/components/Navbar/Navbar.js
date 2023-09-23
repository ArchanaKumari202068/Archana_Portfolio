import React from "react";
import myResume from "../assest/Archana-Resume.pdf"
// import {BsGlobe2,BsGraphUpArrow} from 'react-icons/bs'
// import {FcPhoneAndroid} from 'react-icons/fc'

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [bars, setBars] = useState(false);
  const handleOnClick = () => {
    // console.log("x is visible");
    setBars(!bars);
  };
const downloadButton = document.getElementById('downloadButton');

//  if (downloadButton) {downloadButton.addEventListener('click', () => {
//   const link = document.createElement('a');
//   link.href = 'Archana-Resume.pdf';
//   link.download = 'Archana_Resume.pdf';
//   link.click();
//   link.setAttribute('webkitdirectory', '');
// });}
  // const handleOChange = ()=>{

  // }
  return (
    <div>
      <nav className="main_nav">
        <div className="menu-link">
          <ul>
            <li>
              <a className="active" href='#Home'>
                Home
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#Skills">Skills</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#Projects">Project</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
          </ul>
        </div>
        <div className="resume">
          <button className="resume_button" id="downloadButton">
            <a href={myResume}>

            Resume
            </a>
            </button>
        </div>
        <div id="mobile">
          <div className="bars" onClick={handleOnClick}>
            {bars ? (
              <i className="fa fa-bars"></i>
            ) : (
              <i className="fa fa-times"></i>
            )}
          </div>
        </div>
      </nav>

      </div>
       
  );
};

export default Navbar;
