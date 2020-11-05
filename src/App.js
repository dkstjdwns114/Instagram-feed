import React, { Component } from "react";
import Post from "./Post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Instagram Feed</h2>
        <Post></Post>
      </div>
    );
  }
}

export default App;
