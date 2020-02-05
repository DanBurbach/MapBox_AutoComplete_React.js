import React, { Component, Fragment } from "react";
import MapBox from '../mapboxAndReact';

import '../../styles/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      list: [],
      testList: [],
      location: "",
      geoList: []
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleGeoLocation = this.handleGeoLocation.bind(this);
  }

  onChange = async event => {
    event.preventDefault();
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
    event.preventDefault();
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.currentTarget.innerText,
      location: event.currentTarget.innerText
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

  handleReset = event => {
    event.preventDefault();
    this.setState({
      userInput: "",
      location: ""
    });
  };

  handleGeoLocation = async event =>{
    event.preventDefault();
    const token =
      "pk.eyJ1IjoiZGJ1cmJhY2gxOTgyIiwiYSI6ImNrNjhhbXNwbzAzMWczcG56azQ2anhlcmsifQ.oIeM3Zzm_nFsu-dbACDbZg";
    let selectedLocation = JSON.stringify(this.state.location);
    const replacedLocation = selectedLocation.replace( /\s/g, '');
    const joinedString = replacedLocation.split(',').join("%20");
    console.log(joinedString);
    
    await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${joinedString}.json?access_token=${token}`
    )
      .then(georesponse => georesponse.json())
      .then(georesponse => {
        this.setState({
          geoList: georesponse.features[0].center.toString()
        });
      });
      console.log(this.state.geoList);
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
        <MapBox />
        <br/>
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
            <input type="submit" value="Submit" onClick={this.handleGeoLocation}/>
            <input type="reset" value="Reset" onClick={this.handleReset} />
          </form>
        </div>
      </div>
    );
  }
}
export default Main;