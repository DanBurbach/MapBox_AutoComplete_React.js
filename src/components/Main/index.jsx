import React, { Component } from 'react';

import '../../styles/Main.css';
import EnterCity from '../EnterCity';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      location: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // async componentDidMount() {
  //     const res = await fetch(
  //       "https://coding-challenge.echoandapex.com/locations?q={event.target.value}"
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

  handleChange(event) {
    this.setState({location: event.target.value});
  };

  render() {
    return (
      <div className="GlobalWrapper">
        <h3>Type a city</h3>
        <form autoComplete="off">
          <div className="autocomplete">
            <EnterCity suggestions={[
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
            ]}/>
            {/* <input
              id="myInput"
              type="text"
              name="myCity"
              placeholder="City"
              required="required"
            /> */}
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Main;