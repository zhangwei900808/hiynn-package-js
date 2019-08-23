import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import DemoPage from "./pages/DemoPage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={DemoPage} />} />
        </Switch>
      </HashRouter>
    );
  }
}
export default App;
