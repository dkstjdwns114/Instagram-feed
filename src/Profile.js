import React, { Component } from "react";

function Profile({ profile_image, id }) {
  return (
    <div>
      <img src={profile_image} />
      <a> {id}</a>
    </div>
  );
}

export default Profile;
