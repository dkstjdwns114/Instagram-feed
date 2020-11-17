import React from "react";
import PostData from "./data.json";
// import { Route, Link } from "react-router-dom";
import Profile from "./Profile";
import ProfileDetailThumbnails from "./ProfileDetailThumbnails";

export default function ProfileDetail() {
  let userProfile;
  let detailThumbnails = [];
  PostData.post_list.map((post_list, index) => {
    if (post_list.id === "apple") {
      userProfile = (
        <Profile profile_image={post_list.profile_image} id={post_list.id} />
      );
      detailThumbnails.unshift({ post_list });
    }
    return userProfile;
  });
  console.log("detailThumbnails :", detailThumbnails);
  return (
    <div>
      <p>사용자의 이름이나 프로필 사진을 클릭했을때 연결할 페이지 입니다.</p>
      {userProfile}
      <ProfileDetailThumbnails
        userId={"apple"}
        userInfo={detailThumbnails}
      ></ProfileDetailThumbnails>
    </div>
  );
}
