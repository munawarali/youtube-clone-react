import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HistoryIcon from "@material-ui/icons/History";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { Button, Typography } from "@material-ui/core";
const InsideSidebar = ({ toggleDrawer }) => {
  const [forColor, setforColor] = useState("HomeIcon");
  return (
    <div style={{ width: "200px" }}>
      <div className="m-2">
        <Button
          className="btn btn-outline-light"
          onClick={(event) => toggleDrawer(event, false)}
        >
          <MenuIcon fontSize="medium" />
          <YouTubeIcon
            fontSize="large"
            style={{ color: "red", marginLeft: "18px", cursor: "pointer" }}
          />
          <Typography variant="body 1" className="font-weight-bold">
            YouTube
          </Typography>
        </Button>
      </div>
      <hr />
      <div className="pl-4">
        <div className="mb-3 d-flex align-items-center">
          <HomeIcon
            fontSize="medium"
            onClick={() => setforColor("HomeIcon")}
            style={
              forColor === "HomeIcon"
                ? { color: "red", cursor: "pointer" }
                : { color: "grey", cursor: "pointer" }
            }
          />
          <Typography
            className="ml-4"
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            Home
          </Typography>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <WhatshotIcon
            fontSize="medium"
            onClick={() => setforColor("WhatshotIcon")}
            style={
              forColor === "WhatshotIcon"
                ? { color: "red", cursor: "pointer" }
                : { color: "grey", cursor: "pointer" }
            }
          />
          <Typography
            className="ml-4"
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            Trending
          </Typography>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <SubscriptionsIcon
            fontSize="medium"
            onClick={() => setforColor("SubscriptionsIcon")}
            style={
              forColor === "SubscriptionsIcon"
                ? { color: "red", cursor: "pointer" }
                : { color: "grey", cursor: "pointer" }
            }
          />
          <Typography
            className="ml-4"
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            Subscriptions
          </Typography>
        </div>
      </div>
      <hr />
      <div className="pl-4">
        <div className="mb-3 d-flex align-items-center">
          <VideoLibraryIcon
            fontSize="medium"
            onClick={() => setforColor("VideoLibraryIcon")}
            style={
              forColor === "VideoLibraryIcon"
                ? { color: "red", cursor: "pointer" }
                : { color: "grey", cursor: "pointer" }
            }
          />
          <Typography
            className="ml-4"
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            Library
          </Typography>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <HistoryIcon
            fontSize="medium"
            onClick={() => setforColor("HistoryIcon")}
            style={
              forColor === "HistoryIcon"
                ? { color: "red", cursor: "pointer" }
                : { color: "grey", cursor: "pointer" }
            }
          />
          <Typography
            className="ml-4"
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            Library
          </Typography>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <PlayCircleOutlineIcon
            fontSize="medium"
            onClick={() => setforColor("PlayCircleOutlineIcon")}
            style={
              forColor === "PlayCircleOutlineIcon"
                ? { color: "red", cursor: "pointer" }
                : { color: "grey", cursor: "pointer" }
            }
          />
          <Typography
            className="ml-4"
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            Library
          </Typography>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <WatchLaterIcon
            fontSize="medium"
            onClick={() => setforColor("WatchLaterIcon")}
            style={
              forColor === "WatchLaterIcon"
                ? { color: "red", cursor: "pointer" }
                : { color: "grey", cursor: "pointer" }
            }
          />
          <Typography
            className="ml-4"
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            Library
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default InsideSidebar;
