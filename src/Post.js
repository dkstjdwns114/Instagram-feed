import React from "react";
import Profile from "./Profile";
import ThumbnailCon from "./ThumbnailCon";
import PostData from "./data.json";
import ThumbnailImg from "./ThumbnailImg";
import Replies from "./replies";
import Like from "./Like";
import Save from "./Save";

function Post() {
  return (
    <div>
      {PostData.post_list.map((post_list, index) => {
        return (
          <div key={index} style={{ borderBottom: "1px solid gray" }}>
            <Profile
              profile_image={post_list.profile_image}
              id={post_list.id}
            />
            <ThumbnailImg photo_thumbnails={post_list.photo_thumbnails} />
            <ThumbnailCon content={post_list.contents} />
            <Like like={post_list.like_cnt} />
            <Save />
            <Replies replies={post_list.replies} />
          </div>
        );
      })}
    </div>
  );
}
export default Post;
