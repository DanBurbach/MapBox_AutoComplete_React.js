import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import "../../styles/EnterCity.css";
import '../../styles/Main.css';
// import EnterCity from '../EnterCity';

class Main extends Component {
  static propTypes = {
    recommendations: PropTypes.instanceOf(Array)
  };
  static defaultProps = {
    recommendations: []
  };

  constructor(props) {
    super(props);
    this.state = {
      location: "",
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      list: []
    };
    this.handleChange = this.handleChange.bind(this);

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  async onChange(event) {
    let userEntry = event.currentTarget.value;

    const sourceLibrary = await fetch(
      `https://coding-challenge.echoandapex.com/locations?q=${userEntry}`
    );
    const json = await sourceLibrary.json();
    const predictionsList = new DocumentFragment();
    json.predictions.forEach(prediction => {
      const item = document.createElement("p");
      item.innerHTML = prediction.name;
      predictionsList.appendChild(item);
    });
    this.setState({ list: document.body.appendChild(predictionsList) });    

    const { recommendations } = this.props;
    const userInput = toString(this.state.list);
    // const userInput = this.state.list.toString();
    // const userInput = event.currentTarget.value;
    const filteredSuggestions = recommendations.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    const targetValue = event.persist.value;
    // const targetValue = event.currentTarget.value;

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: targetValue
    });
  }

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
    } else if (event.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (event.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    let suggestionList;
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionList = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "suggestion-active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionList = (
          <div className="no-suggestions">
            <em>We don't have any suggestions, give it another try!</em>
          </div>
        );
      }
    }

    let locations = this.state.location;
    
    return (
      <div className="MainWrapper">
        <h3>Type a city</h3>
        <div className="FormMain">
          <form autoComplete="off">
            <div className="autocomplete">
              {/* <EnterCity
                value=""
                recommendations={[
                  '',
                  locations
                  // current recommendations that need to be replaced with the users chosen item based off list choice
                  // "Alligator",
                  // "Bask",
                  // "Crocodilian",
                  // "Death Roll",
                  // "Eggs",
                  // "Jaws",
                  // "Reptile",
                  // "Solitary",
                  // "Tail",
                  // "Wetlands"
                ]}
              /> */}

              <div>
                <Fragment>
                  <input
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                    placeholder="Enter A Location"
                  />
                  {suggestionList}
                </Fragment>
              </div>
            </div>
            <input type="submit" />
          </form>
        </div>
        <br />
        Your location: {locations}
      </div>
    );
  }
}
export default Main;