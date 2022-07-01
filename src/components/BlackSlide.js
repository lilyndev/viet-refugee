import PropTypes from "prop-types";

const BlackSLide = (props) => {
  return (
    <div className="container slide-black" id={props.slideId}>
      <div className="content">{props.children}</div>
    </div>
  );
};

BlackSLide.propTypes = {
  slideId: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default BlackSLide;
