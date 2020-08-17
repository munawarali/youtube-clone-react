import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

const SideBar = ({ homeHandler }) => {
  const [forColor, setforColor] = useState("HomeIcon");
  return (
    <div className="m-3">
      <div className="mb-4 ">
        <HomeIcon
          className="ml-1"
          onClick={() => {
            setforColor("HomeIcon");
            homeHandler();
          }}
          style={
            forColor === "HomeIcon"
              ? { color: "red", cursor: "pointer" }
              : { color: "grey", cursor: "pointer" }
          }
        />

        <p style={{ fontSize: "10px" }}>Home</p>
      </div>
      <div className="mb-4">
        <WhatshotIcon
          className="ml-1"
          onClick={() => setforColor("WhatshotIcon")}
          style={
            forColor === "WhatshotIcon"
              ? { color: "red", cursor: "pointer" }
              : { color: "grey", cursor: "pointer" }
          }
        />
        <p style={{ fontSize: "10px" }}>Trending</p>
      </div>
      <div className="mb-4">
        <SubscriptionsIcon
          className="ml-1"
          onClick={() => setforColor("SubscriptionsIcon")}
          style={
            forColor === "SubscriptionsIcon"
              ? { color: "red", cursor: "pointer" }
              : { color: "grey", cursor: "pointer" }
          }
        />
        <p style={{ fontSize: "10px" }}>Subscriptions</p>
      </div>
      <div className="mb-4">
        <VideoLibraryIcon
          className="ml-1"
          onClick={() => setforColor("VideoLibraryIcon")}
          style={
            forColor === "VideoLibraryIcon"
              ? { color: "red", cursor: "pointer" }
              : { color: "grey", cursor: "pointer" }
          }
        />
        <p style={{ fontSize: "10px" }}>Library</p>
      </div>
    </div>
  );
};
export default SideBar;
