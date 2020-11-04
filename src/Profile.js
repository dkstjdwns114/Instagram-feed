import React from "react";

export default function Profile({ profile_image, id }) {
  return (
    <div>
      <img src={profile_image} />
      <a> {id}</a>
    </div>
  );
}
