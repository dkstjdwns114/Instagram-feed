import React, { Component } from "react";
import PostData from "./data.json";

class ProfileImg extends Component {
  render() {
    return (
      <div>
        {PostData.post_list.map((post_list, index) => {
          return (
            <p>
              <img src={post_list.profile_image} />
              <a> {post_list.id}</a>
            </p>
          );
        })}
      </div>
    );
  }
}

export default ProfileImg;
