const BlackSLide = (props) => {
  return (
    <div className="container slide-black" id={props.slideId}>
      <div className="content">
        {props.children}  
      </div>
    </div>
  )
}

export default BlackSLide;