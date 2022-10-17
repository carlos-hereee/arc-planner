import React from "react";

const ListItem = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.tag}</p>
      <p>{data.announcement}</p>
    </div>
  );
};

export default ListItem;
