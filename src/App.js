import React, { Component } from "react";
import Post from "./Post";
import ThumbnailCon from "./ThumbnailCon";
import PostData from "./data.json";

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
