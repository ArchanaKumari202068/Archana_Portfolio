import React, { useState,useEffect } from "react";
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
  const [showSlider, setShowSlider] = useState(false);
  useEffect(()=>{
    
  },[])

  const handleLearnMore = (e) => {
    setShowSlider(true);
  };

  return (
    <>
      <div className="card-container">
        <div className="Card">
          <img src={props.imgsrc} className="Project_img" />
        </div>
        <div className="Project-title">
          <h1>{props.title}</h1>
          <button id="learn-more" onClick={handleLearnMore}>
            LEARN MORE
          </button>
        </div>
        <div className="main-project">
          {showSlider ? (
            <div className="project-slider">
              <span onClick={()=>{setShowSlider(false)}}>Close</span>
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
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
              </div>
            </Swiper>
        </div>
          ) : null}
          </div>
      </div>
    </>
  );
};

export default ProjectCards;
