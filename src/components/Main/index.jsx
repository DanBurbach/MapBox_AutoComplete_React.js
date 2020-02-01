import React, { Component } from 'react';

import enterCity from '../EnterCity'
import './../../assets/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

render() {
    return (
        <div className="GlobalWrapper">
            <h3>Type a city</h3>
            <form>
                <div className="autocomplete" style="width:500px;">
                    <input id="myInput" type="text" name="myCity" placeholder="City"/>
                </div>
                <input type="submit" onclick={enterCity}/>
            </form>
        </div>
    );
  }
}
export default Main;