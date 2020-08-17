import React from "react";

const List = ({ listData, clickHandler, listClickHandler }) => {
  const data = listData;
  //const src = "https://www.youtube.com/embed/";
  return (
    <div className="">
      {data
        ? data.map((item) => {
            const img = item.snippet.thumbnails.medium.url;
            return (
              <div
                className="d-flex m-3"
                style={{ width: "" }}
                key={item.id.videoId}
                onClick={() => {
                  clickHandler(item);
                  listClickHandler();
                }}
              >
                <img
                  className=""
                  src={img}
                  alt="Card  cap"
                  height="120"
                  width="200"
                />

                <div className="ml-2" style={{ width: "275px" }}>
                  <p
                    className=""
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    {item.snippet.title}
                  </p>
                  <p
                    className=""
                    style={{
                      fontSize: "12px",

                      color: "grey",
                    }}
                  >
                    {item.snippet.channelTitle}
                  </p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default List;
