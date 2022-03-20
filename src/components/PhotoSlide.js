import React from "react";

const PhotoSlide = (props) => {
  return (
    <div
      className={`container slide-photo ${
        props.overlay === "dark" ? "dark" : "light"
      }`}
      id={props.slideId}
    >
      {props.children ? <div className="content">{props.children}</div> : ""}
    </div>
  );
};

export default PhotoSlide;
