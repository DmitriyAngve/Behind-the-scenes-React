import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Butonn running");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

// props.onClick === props.previous.onClick false -> React.memo finds out that the value changed
// We can make React.memo works for prop values that are objects as well, just need to tweak the way we create and store those objects a little bit -> useCallback
