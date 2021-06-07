//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";
// const h1 = "something"

function time() {
  const t = new Date();
  const tt = t.getHours();
  if (tt > 0 && tt <= 12) {
    const h1 = <h1>Good Morning</h1>;
    return h1;
  } else if (tt > 12 && tt <= 18) {
    const h1 = <h1>Good Afternoon</h1>;
    return h1;
  } else if (tt > 18) {
    const h1 = <h1>Good evening</h1>;
    return h1;
  }
}

ReactDom.render(<div>{time()}</div>, document.getElementById("root"));
