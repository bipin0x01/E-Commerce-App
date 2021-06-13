import React from "react";
import PropTypes from "prop-types"

const Rating = ({ value, text, color }) => {
  return (
    <div>
      <div className="rating">
        <span>
          <i
            style={{ color }}
            className={
              value >= 1
                ? "fas fa-star"
                : value >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
          <i
            style={{ color }}
            className={
              value >= 2
                ? "fas fa-star"
                : value >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
          <i
            style={{ color }}
            className={
              value >= 3
                ? "fas fa-star"
                : value >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
          <i
            style={{ color }}
            className={
              value >= 4
                ? "fas fa-star"
                : value >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
          <i
            style={{ color }}
            className={
              value >= 5
                ? "fas fa-star"
                : value >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      </div>
      {text ? text : null}
    </div>
  );
};

Rating.defaultProps={
    color:"#EC8B19"
}

Rating.propTypes={
    
    value:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
   color:PropTypes.string
}

export default Rating;
