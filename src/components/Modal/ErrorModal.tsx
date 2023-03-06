import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props: { onConfirm: () => void }) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props: {
  title: string;
  message: string;
  onConfirm: () => void;
}) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button type="button" onClick={props.onConfirm}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props: {
  title: string;
  message: string;
  onConfirm: () => void;
}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root") as Element
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root") as Element
      )}
    </Fragment>
  );
};

export default ErrorModal;
