import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} />
      </div>
      <p>
        在此下載圖片:{" "}
        <a target="_blank" href={data.src.large}>
          按此下載
        </a>
      </p>
    </div>
  );
};

export default Picture;
