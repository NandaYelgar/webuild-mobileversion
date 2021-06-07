import React from "react";
import "./Group86.css";

function Group86(props) {
  const { layer1, group85 } = props;

  return (
    <div className="group-86-1">
      <div className="white-1">
        <div className="layer-1-1" style={{ backgroundImage: `url(${layer1})` }}></div>
      </div>
      <img className="group-85-1" src={group85} />
    </div>
  );
}

export default Group86;
