import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Error404(props) {
  return (
    <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>
        <Link to="/">Return to Main</Link>
      </h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;