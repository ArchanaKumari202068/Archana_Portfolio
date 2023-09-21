import React from "react";
import "./Project.css";
// import ReactDOM from 'react-dom';
import ProjectCards from "./ProjectsCards";

function Project() {
  return (
    <>
      <div className="container" id="Projects">
        <div className="Project-heading">
          <h1>Projects</h1>
        </div>
        <div className="Cards">
          <ProjectCards title="Title 1" imgsrc="https://picsum.photos/400/300"/>
          <ProjectCards title="Title 2" imgsrc="https://picsum.photos/400/300" />
          <ProjectCards title="Title 1" imgsrc="https://picsum.photos/400/300"/>
          <ProjectCards title="Title 2" imgsrc="https://picsum.photos/400/300" />
          <ProjectCards title="Title 1" imgsrc="https://picsum.photos/400/300"/>
          <ProjectCards title="Title 2" imgsrc="https://picsum.photos/400/300" />
          


        </div>
      </div>
    </>
  );
}

export default Project;
