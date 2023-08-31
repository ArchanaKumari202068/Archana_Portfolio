import React from "react";

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
          <button className="resume_button">Resume</button>
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

        {/* <div className="type-effect">
          <ul className="dynamic-txts">
            <li><span>Front-end Developer</span></li>
            <BsGlobe2/> <FcPhoneAndroid/> <BsGraphUpArrow/>
            <li><span>Django Developer</span></li>
            <li><span>Just getting started</span></li>
            <BsGraphUpArrow/>
            

          </ul>
        </div> */}

      </div>



    
  );
};

export default Navbar;
