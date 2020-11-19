import React from "react";
import PostData from "./data.json";
import Profile from "./Profile";
import ProfileDetailThumbnails from "./ProfileDetailThumbnails";

export default function ProfileDetail({ match }) {
  let userProfile;
  let detailThumbnails = [];
  PostData.post_list.map((post_list, index) => {
    if (post_list.id === match.params.id) {
      userProfile = (
        <Profile profile_image={post_list.profile_image} id={post_list.id} />
      );
      detailThumbnails.unshift({ post_list });
    }
    return userProfile;
  });
  return (
    <div>
      <h1>
        <a href="/">HOME</a>
      </h1>
      <h2>{match.params.id}의 ProfileDetail</h2>
      {userProfile}
      <ProfileDetailThumbnails
        userId={match.params.id}
        userInfo={detailThumbnails}
      ></ProfileDetailThumbnails>
    </div>
  );
}
