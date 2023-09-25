import React from "react";
import "./Project.css";
import Bytecode_learner_img from "../assest/Bytecode_learnerns_img1.png";
import Bytecode_learner_img2 from "../assest/Bytecode_learnerns_img2.png";
import Bytecode_learner_img3 from "../assest/Bytecode_learnerns_img3.png";
import Bytecode_learner_img4 from "../assest/Bytecode_learnerns_img4.png";
import Stackoverflow_img1 from "../assest/Stackoverflow_clone_img1.png";
import Stackoverflow_img2 from "../assest/Stackoverflow_clone_img2.png";
import Stackoverflow_img3 from "../assest/Stackoverflow_clone_img3.png";
import Stackoverflow_img4 from "../assest/Stackoverflow_clone_img4.png";
import Stackoverflow_img5 from "../assest/Stackoverflow_clone_img4.png";
import Blog_Site_img1 from "../assest/Blog_Site_img1.png";
import Covid_Data_Analysis_img1 from "../assest/Covid_Data_Analysis_img1.png";
import Covid_Data_Analysis_img2 from "../assest/Covid_Data_Analysis_img2.png";
import Covid_Data_Analysis_img3 from "../assest/Covid_Data_Analysis_img3.png";
import Covid_Data_Analysis_img4 from "../assest/Covid_Data_Analysis_img4.png";
import weather_check_img from "../assest/weather_check_img.png";
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
          <ProjectCards
            aboutProject={[
              " Developed web UI/UX through Figma and designedprototypes.",
              "Used ReactJS for Frontend.",
              "Worked with existing API’s to access necessary information from the backend. ",
              "Collaborated with teammates and updated application versions using Git and Git.",
            ]}
            href="http://bytecodelearners.cuh.ac.in/"
            projectLink="http://bytecodelearners.cuh.ac.in/"
            technologiesUsed="Html,CSS,Js, React.js, Node.js,Express.js, MongoDB"
            title="Bytecode learner"
            imgsrc={Bytecode_learner_img}
            sliderImgs={[
              Bytecode_learner_img,
              Bytecode_learner_img2,
              Bytecode_learner_img3,
              Bytecode_learner_img4,
            ]}
          />
          <ProjectCards
            aboutProject={[
              "Developed a StackOverflow clone using MERN stack  (MongoDB, Express.js, React, Node.js)",
              "Implemented user authentication, question posting, and answer functionalities using React for the frontend and Express.js for the backend.",
              " Utilized MongoDB for database management to store and retrieve user-generated questions and answers.",
              "Integrated responsive design and intuitive UI for seamless user experience in line with the original StackOverflow platform.",
            ]}
            href="https://archana-stackoverflow.vercel.app/"
            projectLink="https://archana-stackoverflow.vercel.app/"
            technologiesUsed="Html,CSS,Js, React.js, Node.js,Express.js, MongoDB"
            title="Stackoverflow Clone"
            imgsrc={Stackoverflow_img2}
            sliderImgs={[
              Stackoverflow_img2,
              Stackoverflow_img1,
              Stackoverflow_img3,
              Stackoverflow_img4,
              Stackoverflow_img5,
            ]}
          />

          <ProjectCards
            aboutProject={[
              "Developed a web application using Django web framework, Python, HTML/CSS, SQLite database.",
              "Designed and developed the frontend with help of CSS and JS, resulting in a responsive and polished user interface.",
              "Created Django forms for database models.",
              "Worked on back-end and front-end features.",
            ]}
            href="https://archana-blog-site.vercel.app/"
            projectLink="https://archana-blog-site.vercel.app/"
            technologiesUsed="Html,CSS,Js, React.js, Node.js,Express.js, MongoDB"
            title="Blog-Site"
            imgsrc={Blog_Site_img1}
            sliderImgs={[
              Blog_Site_img1,
              Blog_Site_img1,
              Blog_Site_img1,
              Blog_Site_img1,
              Blog_Site_img1,
            ]}
          />

          <ProjectCards
            aboutProject={[
              " Used data from Kaggle for analysis.",
              "Performed Exploratory Data Analysis using Pandas, Numpy.",
              "Created charts like bar chart, line chart for better visualization of data using Matplotlib and Seaborn libraries.",
              "Used Folium to display most affected areas.",
              "Used statistical techniques to understand the data.",
            ]}
           
            href="https://github.com/ArchanaKumari202068/Covid_Data_Analysis"
            projectLink="https://github.com/ArchanaKumari202068/Covid_Data_Analysis"
            technologiesUsed="Python,Matplotlib,Numpy,Pandas,Folium"
            title="Covid Data Analysis"
            imgsrc={Covid_Data_Analysis_img1}
            sliderImgs={[
              Covid_Data_Analysis_img1,
              Covid_Data_Analysis_img2,
              Covid_Data_Analysis_img3,
              Covid_Data_Analysis_img4,
            ]}
          />
          <ProjectCards
            aboutProject={[
              "Used request module to get information from an API",
              "Used Tkinter module with improved user experience",
              "Worked with JSON format to get required data from the response.",
              " Learned to make GUI applications using Tkinter",
             
            ]}
           
            href="https://github.com/ArchanaKumari202068/Weather_App"
            projectLink="https://github.com/ArchanaKumari202068/Weather_App"
            technologiesUsed="Html,CSS,Js, React.js, Node.js,Express.js, MongoDB"
            title="Weather_App"
            imgsrc={weather_check_img}
            sliderImgs={[weather_check_img]}
          />
        </div>
      </div>
    </>
  );
}

export default Project;
