import React from "react";

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
      <div className="container" id='Home'>
        <h1>Home</h1>
      </div>
      <div className="container" id='Skills'>
        <h1>Skills</h1>
      </div>
      <div className="container" id='Projects'>
        <h1>Projects</h1>
      </div>
      <div className="container" id='About'>
        <h1>About</h1>
      </div>
    </div>
  );
};

export default Navbar;
