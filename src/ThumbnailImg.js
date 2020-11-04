import React, { Component, useEffect, useState } from "react";
import PostData from "./data.json";

function ThumbnailImg({ photo_thumbnails }) {
  const container = Object.values(photo_thumbnails).map((images, index) => {
    return <img id={index} src={images} />;
  });
  const [currentImage, setImage] = useState(container[0]);
  console.log(container);
  return (
    <div>
      {currentImage}
      <p>
        <a href="#">이전</a> <a href="#">다음</a>
      </p>
    </div>
  );
}

export default ThumbnailImg;
