import React from "react";
import "./commancss.css"

const Imagecontainer = (props) => {
  return (
    <>

      <div className="profile-img">
        <img
          src={props.src ? props.src : ""}
          alt={props.alt ? props.alt : "no alt"}
        />
      </div>
    </>
  );
};

export default Imagecontainer;
