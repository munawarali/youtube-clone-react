import React from "react";
const Big = ({ data }) => {
  const videoList = data;
  const src = "https://www.youtube.com/embed/";
  return (
    <div>
      {videoList ? (
        <iframe
          title="..."
          width="80%"
          height="400"
          src={src + videoList.id.videoId}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : null}
    </div>
  );
};
export default Big;
