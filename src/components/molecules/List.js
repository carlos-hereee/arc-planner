import React from "react";
import Empty from "../atoms/Empty";

const List = ({ list }) => {
  return (
    <div className="list">
      <div className="list-title">
        {list ? (
          list.map((l) => (
            <span className="row-element" key={l.uid}>
              {l.name}
            </span>
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default List;
