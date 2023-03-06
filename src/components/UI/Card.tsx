import React, { ReactNode } from "react";
import styles from "./Card.module.css";

type propsType = {
  className: string;
  children: ReactNode;
};
const Card = (props: propsType) => {
  return (
    <div className={`${styles["card"]} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
