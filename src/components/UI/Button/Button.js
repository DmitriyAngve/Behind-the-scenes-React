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
