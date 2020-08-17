import React from "react";
const Big = ({ data }) => {
  const videoList = data;
  const src = "https://www.youtube.com/embed/";
  return (
    <div>
      {videoList ? (
        <div>
          <iframe
            title="..."
            width="700"
            height="400"
            src={src + videoList.id.videoId}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <h4 style={{ width: "699px" }}>{videoList.snippet.title}</h4>
        </div>
      ) : null}
    </div>
  );
};
export default Big;
