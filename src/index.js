//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";
let h1;
const color = {
  color: "red"
};
function time() {
  const t = new Date();
  const tt = t.getHours();
  if (tt > 0 && tt <= 12) {
    color.color = "blue";
    h1 = "Good Morning";
    return h1;
  } else if (tt > 12 && tt <= 18) {
    color.color = "Green";
    const h1 = "Good Afternoon";
    return h1;
  } else if (tt > 18) {
    color.color = "red";
    const h1 = "Good Evening";
    return h1;
  }
}

ReactDom.render(
  <div>
    <h1 style={color}> {time()}</h1>
  </div>,
  document.getElementById("root")
);
