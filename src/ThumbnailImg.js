import React, { useState } from "react";

export default function ThumbnailImg({ photo_thumbnails }) {
  const [index, setIndex] = useState(0);
  const images = Object.values(photo_thumbnails).map((image, index) => {
    return image;
  });
  const nextImage = () => {
    if (index + 1 === images.length) return;
    setIndex(index + 1);
  };
  const prevImage = () => {
    console.log("before: ", index);
    if (index === 0) return;
    setIndex(index - 1);
  };
  return (
    <div>
      <img src={images[index]} alt={`${index}번 이미지`} />
      <p>
        <button onClick={prevImage}>{"이전"}</button>
        <a>
          {index + 1} / {images.length}
        </a>
        <button onClick={nextImage}>{"다음"}</button>
      </p>
    </div>
  );
}
