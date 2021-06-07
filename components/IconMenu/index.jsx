import React from "react";
import "./IconMenu.css";

function IconMenu(props) {
  const { vector2, vector3 } = props;

  return (
    <div className="icon-menu">
      <img
        className="vector-23"
        src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-167@2x.png"
      />
      <img className="vector-22" src={vector2} />
      <img className="vector-22" src={vector3} />
    </div>
  );
}

export default IconMenu;
