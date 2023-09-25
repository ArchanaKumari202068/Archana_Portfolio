import React, { useState, useEffect } from "react";

// import ProjectDetails from "./ProjectDetails";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProjectCards = (props) => {
  // const project1 = {
  //   aboutProject:
  //     " ● Developed web UI/UX through Figma and designed prototypes . ● Used ReactJS for Frontend.● Worked with existing API’s to access necessary information from the backend. ● Collaborated with teammates and updated application versions using Git and Git.",
  //   projectLink: "https://archana-stackoverflow.vercel.app/",
  //   technologiesUsed: "Html,CSS,Js, React.js, Node.js,Express.js, MongoDB",
  // };

 
  const [showSlider, setShowSlider] = useState(false);
  // const [ProjectDetails, setProjectDetails] = useState(false);
  useEffect(() => {}, []);

  const handleLearnMore = (e) => {
    setShowSlider(true);
  };

  return (
    <div className="main_project_container" >
      <div className={`card-container`}>
        <div className="Card">
          <img src={props.imgsrc} alt="Project_img" className="Project_img" />
          <h2 className="Project_img_title">{props.title}</h2>
        </div>
        <div className="Project-title">
          <h1>{props.title}</h1>
          <button id="learn-more" onClick={handleLearnMore}>
            LEARN MORE
          </button>
        </div>
        <div className="main-project">
          {showSlider ? (
            <div className="project-slider-container">
              <div className="project-slider">
                <span
                  className="Close"
                  onClick={() => {
                    setShowSlider(false);
                  }}
                >
                  Close
                </span>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <div className="Slider_box">
                    {props.sliderImgs?.map((imgurl) => {
                      return (
                        <SwiperSlide>
                          <img id="Project_img_slider" alt="Project_img_slider" src={imgurl} />
                        </SwiperSlide>
                      );
                    })}
                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide> */}
                  </div>
                  {/* <p>about</p> */}
                </Swiper>
                {
                  <div className="Project_details">
                  

                    <table>
                      <tr>
                        <th>About Project</th>
                      </tr>
                      <tr>
                        <td>

                          <ul>
                            
                          {props?.aboutProject.map((text,idx)=>{
                            return <li key={idx}>{text}</li>
                          })}
                          </ul>
                         
                        </td>
                      </tr>
                      <tr>
                        <th>Project Link</th>
                      </tr>
                      <tr>
                        <td>
                          
                          <a href={props.projectLink}>
                            {props.projectLink}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Technologies Used</th>
                      </tr>
                      <tr>
                        <td>{props.technologiesUsed}</td>
                        </tr>
                    </table>
                    {/* Stackoverflow_clone */}

                  </div>
                }
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
