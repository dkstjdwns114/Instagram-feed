import React from "react";
import Profile from "./Profile";
import ThumbnailCon from "./ThumbnailCon";
import PostData from "./data.json";
import ThumbnailImg from "./ThumbnailImg";

function Post() {
  return (
    <div>
      {PostData.post_list.map((post_list, index) => {
        return (
          <div key={index}>
            <Profile
              profile_image={post_list.profile_image}
              id={post_list.id}
            />
            <ThumbnailImg photo_thumbnails={post_list.photo_thumbnails} />
            <ThumbnailCon content={post_list.contents} />
          </div>
        );
      })}
    </div>
  );
}
export default Post;
