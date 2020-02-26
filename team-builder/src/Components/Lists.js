import React from "react";

const Lists = props => {
  return (
    <div className="list">
      {props.lists.map(list => (
        <div className="list" key={list.id}>
          <h2>{list.name}</h2>
          <p>{list.home}</p>
        </div>
      ))}
    </div>
  );
};

export default Lists;
