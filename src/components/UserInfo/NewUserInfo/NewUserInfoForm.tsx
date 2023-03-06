import React, { FormEvent, SyntheticEvent } from "react";
import styles from "./NewUserInfoForm.module.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

type propsType = {
  nameRef: any;
  ageRef: any;
  onFormSubmit: (event: FormEvent) => void;
};

const NewUserInfoForm = (props: propsType) => {
  return (
    <Card className={styles["inputCard"]}>
      <form onSubmit={props.onFormSubmit}>
        <div className={styles["form-controls"]}>
          <div className={styles["form-control"]}>
            <label>Username</label>
            <input type="text" ref={props.nameRef} />
          </div>
          <div className={styles["form-control"]}>
            <label>Age (Years)</label>
            <input type="text" ref={props.ageRef} />
          </div>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default NewUserInfoForm;
