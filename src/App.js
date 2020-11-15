import React, { Component } from "react";
import Post from "./Post";
import ProfileDetail from "./ProfileDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Instagram Feed</h2>
        <Post></Post>
        <br />
        <h2>User Profile details Test</h2>
        <ProfileDetail></ProfileDetail>
      </div>
    );
  }
}

export default App;
