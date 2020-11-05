import React from "react";

export default function Profile({ profile_image, id }) {
  return (
    <div>
      <img src={profile_image} alt={`${id} 프로필 이미지`} />
      <span>{`←${id}의 프로필사진`}</span>
    </div>
  );
}
