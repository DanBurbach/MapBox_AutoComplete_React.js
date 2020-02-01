import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import '/../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.MAIN} component={Main} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;