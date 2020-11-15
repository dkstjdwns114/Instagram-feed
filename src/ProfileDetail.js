import React from "react";
import PostData from "./data.json";
// import { Route, Link } from "react-router-dom";
import Profile from "./Profile";

export default function ProfileDetail() {
  let userProfile;
  PostData.post_list.map((post_list, index) => {
    if (post_list.id === "apple") {
      userProfile = (
        <Profile profile_image={post_list.profile_image} id={post_list.id} />
      );
    }
    return userProfile;
  });
  console.log(Object.values(userProfile));
  return (
    <div>
      <p>사용자의 이름이나 프로필 사진을 클릭했을때 연결할 페이지 입니다.</p>
      {userProfile}
    </div>
  );
}
