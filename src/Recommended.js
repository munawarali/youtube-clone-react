import React, { useState, useEffect } from "react";
import Card from "./Card";
import youtube from "./axios";
const Recommended = () => {
  const [data, setData] = useState([]);
  const getVideos = () => {
    youtube
      .get("search", {
        params: {
          key: "Your key please",
          part: "snippet",
          maxResults: 10,
          q: "computer programming",
        },
      })
      .then((res) => {
        console.log(res);
        const array1 = res.data.items;
        setData(array1);
      })
      .catch((err) => console.log(err));
  };
  useEffect(getVideos, []);
  return (
    <div>
      <h4>Recommendations</h4>
      <hr />
      <Card data={data} />
    </div>
  );
};
export default Recommended;
