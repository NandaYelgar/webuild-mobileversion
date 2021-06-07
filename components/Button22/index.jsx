import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x13122875TimelineData);
  }, []);

  return (
    <div className="x13122875 component component-wrapper not-ready">
      <div className="master-button-yu6mvD">
        <div className="button-i1312287551-JP7kQ1 valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x13122875TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x13122875",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
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
        overrides: {},
      },
    },
  },
];

export default Button22;
