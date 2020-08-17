import React, { useState } from "react";
import InsideSidebar from "./InsideSidebar";
import { AppBar, Button, Typography, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";

const Home = ({ onchange, onsubmit }) => {
  const [selected, setselected] = useState(false);
  const toggleDrawer = (event, value) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setselected(value);
  };

  return (
    <AppBar
      position="sticky"
      color="white"
      style={{ height: "11vh", marginBottom: "10px" }}
    >
      <div className="d-flex justify-content-lg-between p-2">
        <div className="d-flex align-items-center">
          <div>
            <Button
              className="btn btn-outline-light"
              onClick={(event) => toggleDrawer(event, true)}
            >
              <MenuIcon fontSize="medium" />
            </Button>
            <Drawer
              open={selected}
              onClose={(event) => toggleDrawer(event, !selected)}
            >
              <InsideSidebar toggleDrawer={toggleDrawer} />
            </Drawer>
          </div>
          <div className="d-flex align-items-center">
            <YouTubeIcon
              fontSize="large"
              style={{ color: "red", cursor: "pointer" }}
            />
            <Typography variant="body 1" className="font-weight-bold">
              YouTube
            </Typography>
          </div>
        </div>
        <div className="d-flex align-items-center">
          {/*<Input />*/}
          <form onSubmit={onsubmit} className="d-flex align-items-center">
            <div className="input-group input-group-md ml-1">
              <input
                type="text"
                className="form-control"
                size="50"
                onChange={onchange}
              />
            </div>
            <Button
              type="submit"
              color="primary"
              className="btn btn-outline-light"
            >
              <SearchIcon fontSize="medium" />
            </Button>
          </form>
        </div>
        <div className="d-flex">
          <VideoCallIcon
            className="m-3"
            fontSize="medium"
            style={{ cursor: "pointer" }}
          />
          <AppsIcon
            className="m-3"
            fontSize="medium"
            style={{ cursor: "pointer" }}
          />
          <NotificationsIcon
            className="m-3"
            fontSize="medium"
            style={{ cursor: "pointer" }}
          />
          <AccountCircleIcon
            className="m-3"
            fontSize="medium"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </AppBar>
  );
};
export default Home;
