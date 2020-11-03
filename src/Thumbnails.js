import React, { Component } from "react";
import PostData from "./data.json";

class Thumbnails extends Component {
  render() {
    return (
      <div>
        {PostData.post_list.map((post_list, index) => {
          return (
            <div>
              <p>{post_list.contents}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Thumbnails;
