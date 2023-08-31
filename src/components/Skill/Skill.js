import React from "react";
import mySkills from "../assest/skill.svg";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="container" id="Skills">
      <div className="Main_Skills_container">
        
        <div className="Skill_image">
        <h1>Skills</h1>
          <img src={mySkills} alt="myskills" />
        </div>
        <div className="Skill_known"></div>
      </div>
    </div>
  );
};

export default Skill;
