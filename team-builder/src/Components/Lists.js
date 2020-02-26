import React from "react";

const Lists = props => {
  return (
    <div>
      {props.lists.map(list => (
        <div className="list" key={list.id}>
        <h2>{list.name}</h2>
        <p>{list.home}</p>
        <p>{list.email}</p>
        <p>{list.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Lists;
