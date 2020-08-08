import React from "react";
const List = ({ listData, clickHandler }) => {
  const data = listData;
  //const src = "https://www.youtube.com/embed/";
  return (
    <div className="d-flex flex-wrap">
      {data
        ? data.map((item) => (
            <div
              className="card m-3"
              style={{ width: "14rem" }}
              key={item.id.videoId}
              onClick={() => {
                clickHandler(item);
              }}
            >
              <img
                className="card-img-top"
                src={item.snippet.thumbnails.medium.url}
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "16px" }}>
                  {item.snippet.title}
                </h5>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default List;
