import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button3.css";

function Button3(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x13123117TimelineData);
  }, []);

  return (
    <div className="x13123117 component component-wrapper not-ready">
      <div className="master-button-VvF9Og">
        <div className="button-i1312311751-1hqxWu valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x13123117TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x13123117",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
    },
  },
];

export default Button3;
