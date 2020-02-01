import React, { Component } from 'react';

// import EnterCity from '../EnterCity'
import '../../styles/Main.css';
import EnterCity from '../EnterCity';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    // EnterCity();
  }

  // enterCity() {
  //   console.log("test");
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
  // }

  render() {
    return (
      <div className="GlobalWrapper">
        <h3>Type a city</h3>
        <form autoComplete="off">
          <div className="autocomplete">
            <EnterCity 
              suggestions={["PDX"]}/>
            {/* <input
              id="myInput"
              type="text"
              name="myCity"
              placeholder="City"
              required="required"
            /> */}
          </div>
          <input type="submit" onclick={""} />
        </form>
        <div>{this.state.results}</div>
      </div>
    );
  }
}
export default Main;