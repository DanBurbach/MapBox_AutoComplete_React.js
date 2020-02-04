import React, { Component, Fragment } from "react";

// import "../../styles/EnterCity.css";
import '../../styles/Main.css';
// import EnterCity from '../EnterCity';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      list: [],
      testList: []
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    this.handleSaveLocation = this.handleSaveLocation.bind(this);
  }

  onChange = async event => {
    const userInput = event.currentTarget.value || "";

    await fetch(
      `https://coding-challenge.echoandapex.com/locations?q=${userInput}`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          testList: response.predictions.concat([response])
        });
      });
    let array1 = [this.state.testList[0].description] || "";
    let array2 = [this.state.testList[1].description] || "";
    let array3 = [this.state.testList[2].description] || "";
    let array4 = [this.state.testList[3].description] || "";
    let array5 = [this.state.testList[4].description] || "";

    const combinedResults = [array1, array2, array3, array4, array5] || "";
    const flattenedResults = [].concat(...combinedResults) || "";
    this.setState({
      list: flattenedResults
    });

    const recommendations = this.state.list;

    const filteredSuggestions = recommendations.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    console.log(filteredSuggestions);

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: userInput
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

  handleSaveLocation(event) {
    let userLocation = this.state.userInput;
    this.setState({ location: userLocation});
  }

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
        userInput,
        list
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

    return (
      <div className="MainWrapper">
        <h3>Type a city</h3>
        <div className="FormMain">
          <form autoComplete="off">
            <div className="autocomplete">
              <Fragment>
                <input
                  id="autoCompleteEnter"
                  type="text"
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                  value={userInput}
                  placeholder="Enter a location..."
                  recommendations={list}
                  required="yes"
                />
                {suggestionList}
              </Fragment>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default Main;