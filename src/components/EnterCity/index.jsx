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
    const { recommendations } = this.props;
    const userInput = event.currentTarget.value;

    const filteredSuggestions = recommendations.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: event.currentTarget.value
    });
  };

  onClick = event => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.currentTarget.innerText
    });
  };

  onKeyDown = event => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (event.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    else if (event.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    else if (event.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length)   {
          return;
        }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render () {
    return (
      <div>
        <Fragment>
          <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
        </Fragment>
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