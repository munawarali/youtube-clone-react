import React from "react";
import { Avatar } from "@material-ui/core";
const card = ({ data }) => {
  return (
    <div className="d-flex flex-wrap">
      {data.map((item) => (
        <a
          href="https://youtu.be/4JC8ahZneYU"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div
            className="card m-1"
            style={{ width: "18rem", height: "20rem", border: "none" }}
            key={item.id.videoId}
          >
            <img
              className="card-img-top"
              src={item.snippet.thumbnails.medium.url}
              alt="Card  cap"
            />
            <div className="d-flex m-2">
              <Avatar
                className="mt-4"
                src={item.snippet.thumbnails.default.url}
              />
              <div className="card-body">
                <p
                  className="card-title"
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  {item.snippet.title}
                </p>

                <p className="" style={{ fontSize: "13px", color: "grey" }}>
                  {item.snippet.channelTitle}
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
export default card;
