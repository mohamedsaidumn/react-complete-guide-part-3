import React, { ReactNode, SyntheticEvent } from "react";

import classes from "./Button.module.css";

const Button = (props: {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className={classes.button}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
