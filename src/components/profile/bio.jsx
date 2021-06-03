import React from "react";

const Bio = (props) => (
  <div className="Info">
    <h3>{props.name}</h3>
    <p>{props.title}</p>
  </div>
);

export default Bio;
