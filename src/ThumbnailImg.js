import React, { Component } from "react";
import PostData from "./data.json";

function ThumbnailImg() {
  return (
    <div>
      {/* {PostData.post_list.map((post_list, index) => {
        post_list.photo_thumbnails.map((images, index) => {
          console.log(images);
          return <img src={images} />;
        });
        return post_list;
      })} */}
    </div>
  );
}

export default ThumbnailImg;
