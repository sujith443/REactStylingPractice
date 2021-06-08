import React from "react";
let h1;
const color = {
  color: "red"
};
function Time() {
  const t = new Date();
  const tt = t.getHours();
  if (tt > 0 && tt <= 12) {
    color.color = "blue";
    h1 = <h1 style={color}>Good Morning</h1>;
    return h1;
  } else if (tt > 12 && tt <= 18) {
    color.color = "Green";
    h1 = <h1 style={color}>Good Afternoon</h1>;
    return h1;
  } else if (tt > 18) {
    color.color = "red";
    h1 = <h1 style={color}>Good Evening</h1>;
    return h1;
  }
}

export default Time;
