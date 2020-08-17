import React from "react";
import List from "./list";
import Big from "./big";
const Search = ({ listData, listClickHandler, clickHandler, data }) => {
  return (
    <div className="d-flex">
      <div>{data ? <Big data={data} /> : null}</div>
      <div>
        <List
          listData={listData}
          clickHandler={clickHandler}
          listClickHandler={listClickHandler}
        />
      </div>
    </div>
  );
};
export default Search;
