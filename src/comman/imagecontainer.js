import React from "react";
import "./commancss.css";
import { useInView } from "react-intersection-observer";

const Imagecontainer = (props) => {
const {ref:myRef,inView:isMyElementInView}=useInView();
  return (
    <div className="common_profile_img" ref={myRef}>

      <div className={`profile-img ${isMyElementInView ?"i-am-visible":'right-element'}`} >
        <img
          src={props.src ? props.src : ""}
          alt={props.alt ? props.alt : "no alt"}
        />
      </div>
    </div>
  );
};

export default Imagecontainer;
