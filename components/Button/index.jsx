import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button.css";

function Button(props) {
  const { children, className } = props;

  useEffect(() => {
    loadTimelineData(x13122887TimelineData);
  }, []);

  return (
    <div className={`x13122887 component component-wrapper not-ready ${className || ""}`}>
      <div className="master-button-1NX8tw">
        <div className="button-i1312288751-l5bxXw valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x13122887TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x13122887",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button;
