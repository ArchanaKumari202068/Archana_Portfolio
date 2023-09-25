import React from "react";
import myResume from "../assest/Archana-Resume.pdf"
// import {BsGlobe2,BsGraphUpArrow} from 'react-icons/bs'
// import {FcPhoneAndroid} from 'react-icons/fc'

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [bars, setBars] = useState(false);
  
  const handleOnClick = () => {
    setBars(!bars);
    // console.log("Hlw")
  };



  return (
    <div>
      <nav className="main_nav">
          <div className="bars" onClick={handleOnClick} >
              <i className="fa fa-bars"></i> 
          </div>
        <div className={`menulink ${bars ? "show":""}`} onClick={handleOnClick} id="nav-menu">
        <div className={`mobile`} >
        </div>
         
          <ul >
          <i className="fa fa-multiply"></i> 

          </ul>
          <ul >
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

        <div className="resume">
          <button className="resume_button" id="downloadButton">
            <a href={myResume}>

            Resume
            </a>
            </button>
        </div>

        
        </div>
      </nav>

      </div>
      
  );
};

export default Navbar;
