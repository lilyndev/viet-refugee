import PropTypes from "prop-types";

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

PhotoSlide.PropTypes = {
  overlay: PropTypes.string,
  slideId: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default PhotoSlide;
