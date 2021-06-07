import React from "react";
import "./Group87.css";

function Group87(props) {
  const { f1, instagram, vector2, vector3 } = props;

  return (
    <div className="group-87">
      <div className="facebook-app-symbol">
        <img className="f-1" src={f1} />
      </div>
      <div className="instagram" style={{ backgroundImage: `url(${instagram})` }}>
        <div className="overlap-group2-5">
          <img
            className="vector-24"
            src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-226@2x.png"
          />
          <img className="vector-26" src={vector2} />
        </div>
      </div>
      <div className="twitter">
        <img className="vector-25" src={vector3} />
      </div>
    </div>
  );
}

export default Group87;
