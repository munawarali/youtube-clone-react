import React from "react";
import "./App.css";
import youtube from "./axios";
import Big from "./big";
import List from "./list";
class App extends React.Component {
  state = {
    serchItem: "",
    videosList: [],
    selected: null,
  };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ serchItem: value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const name = this.state.serchItem;
    youtube
      .get("search", {
        params: {
          key: "Place your API key here",
          part: "snippet",
          maxResults: 5,
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
  };
  clickHandler = (id) => {
    console.log(id);
    this.setState({ selected: id });
  };

  render() {
    return (
      <div className="main">
        <center>
          <div className="form_div">
            <form className="form_input" onSubmit={this.submitHandler}>
              <input
                type="text"
                placeholder="search"
                value={this.state.serchItem}
                onChange={this.handleChange}
                className="form-control m-2 flex-0.2"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />

              {/*<h1>{this.state.serchItem}</h1>*/}
            </form>
          </div>
          <hr />
          <div>
            {this.state.videosList ? <Big data={this.state.selected} /> : null}
          </div>
          <div className="m-3">
            <List
              listData={this.state.videosList}
              clickHandler={this.clickHandler}
            />
          </div>
        </center>
      </div>
    );
  }
}

export default App;
