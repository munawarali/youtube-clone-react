import React from "react";
import "./App.css";
import youtube from "./axios";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import Search from "./Search";
import Home from "./Home";
class App extends React.Component {
  state = {
    serchItem: "",
    videosList: [],
    selected: null,
    show: false,
    sidebar: true,
    big: null,
  };
  onChange = (e) => {
    const value = e.target.value;
    this.setState({ serchItem: value });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const name = this.state.serchItem;
    youtube
      .get("search", {
        params: {
          key: "your key please",
          part: "snippet",
          maxResults: 2,
          q: name,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(typeof res);
        const array1 = res.data.items;
        this.setState({ videosList: array1, selected: array1[0] });
        console.log(this.state.videosList);
      })
      .catch((err) => console.log(err));
    console.log(this.state.serchItem);
    this.setState({ show: true, big: null, sidebar: true });
  };
  listClickHandler = () => {
    this.setState({ sidebar: false });
  };
  clickHandler = (item) => {
    this.setState({ big: item });
  };
  homeHandler = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <Home onchange={this.onChange} onsubmit={this.onSubmitHandler} />

        <div className="d-flex">
          {this.state.sidebar ? (
            <div className="mr-2" style={{ position: "fixed" }}>
              <Sidebar homeHandler={this.homeHandler} />
            </div>
          ) : null}
          <div
            style={
              this.state.sidebar
                ? { marginLeft: "100px" }
                : { marginLeft: "20px" }
            }
          >
            {this.state.show === true ? (
              <Search
                listData={this.state.videosList}
                listClickHandler={this.listClickHandler}
                clickHandler={this.clickHandler}
                data={this.state.big}
              />
            ) : (
              <Recommended />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
