import React, { Component } from "react";
import Post from "./Post";
import ProfileDetail from "./ProfileDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Post} />
            <Route exact path="/profileDetail/:id" component={ProfileDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
