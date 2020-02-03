import React, { Component } from "react";

import "../../styles/EnterCity.css";
import '../../styles/Main.css';
import EnterCity from '../EnterCity';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  render() {
    let locations = this.state.location;
    
    return (
      <div className="MainWrapper">
        <h3>Type a city</h3>
        <div className="FormMain">
          <form autoComplete="off">
            <div className="autocomplete">
              <EnterCity
                recommendations={[
                  // current recommendations that need to be replaced with the users chosen item based off list choice
                  "Alligator",
                  "Bask",
                  "Crocodilian",
                  "Death Roll",
                  "Eggs",
                  "Jaws",
                  "Reptile",
                  "Solitary",
                  "Tail",
                  "Wetlands"
                ]}
              />
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