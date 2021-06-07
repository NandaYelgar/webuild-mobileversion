import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button4.css";

function Button4(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x13123129TimelineData);
  }, []);

  return (
    <div className="x13123129 component component-wrapper not-ready">
      <div className="master-button-JxTYQe">
        <div className="button-i1312312951-fo5VOg valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x13123129TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x13123129",
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

export default Button4;
