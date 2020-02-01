import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class EnterCity extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };
  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = event => {

  };

  onClick = event => {

  };

  onKeyDown = event => {

  };

  render () {
    return (
      <div>
        <input
          type="text"
        />
      </div>
    );
  }

}

export default EnterCity;

//   async () => {
//     const res = await fetch(
//       "https://coding-challenge.echoandapex.com/locations?q=pdx"
//     );
//     const json = await res.json();
//     const predictionsList = new DocumentFragment();
//     json.predictions.forEach(prediction => {
//       const item = document.createElement("p");
//       item.innerHTML = prediction.name;
//       predictionsList.appendChild(item);
//     });
//     document.body.appendChild(predictionsList);
//   };