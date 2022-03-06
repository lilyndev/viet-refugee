const PhotoSlide = (props) => {
  return (
    <div
      className={`container slide-photo ${props.overlay === "dark" ? "dark" : "light"}`}
      id={props.slideId}
    >
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default PhotoSlide;