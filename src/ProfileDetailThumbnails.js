import React from "react";

export default function ProfileDetailThumbnails({ userId, userInfo }) {
  let info = userInfo.map((information, inx) => {
    return Object.values(information);
  });
  let thumbnailArr = [];
  for (let i = 0; i < info.length; i++) {
    thumbnailArr.push(info[i][0]["photo_thumbnails"][0]);
  }

  let thumbnailList = [];

  thumbnailArr.forEach((thumbnail, index) => {
    thumbnail.type === "image"
      ? (index + 1) % 3 === 0
        ? thumbnailList.push(
            <>
              <img src={thumbnail.thumbnails} alt={`${index + 1}번 이미지`} />
              <br />
            </>
          )
        : thumbnailList.push(
            <img src={thumbnail.thumbnails} alt={`${index + 1}번 이미지`} />
          )
      : (index + 1) % 3 === 0
      ? thumbnailList.push(
          <>
            <video controls loop muted width="140" height="140">
              <source src={"../../" + thumbnail.thumbnails} type="video/mp4" />
            </video>
            <br />
          </>
        )
      : thumbnailList.push(
          <>
            <video controls loop muted width="140" height="140">
              <source src={"../../" + thumbnail.thumbnails} type="video/mp4" />
            </video>
          </>
        );
  });
  return (
    <div>
      <p>게시물 : {thumbnailArr.length}개</p>
      {thumbnailList}
    </div>
  );
}
