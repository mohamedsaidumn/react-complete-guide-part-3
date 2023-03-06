import React, { ReactNode, FormEvent, SyntheticEvent } from "react";
import styles from "./NewUserInfoForm.module.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

type propsType = {
  usernameVal: string;
  ageVal: string;
  onUsernameStateChange: (event: SyntheticEvent) => void;
  onAgeStateChange: (age: SyntheticEvent) => void;
  onFormSubmit: (event: FormEvent) => void;
};

const NewUserInfoForm = (props: propsType) => {
  return (
    <Card className={styles["inputCard"]}>
      <form onSubmit={props.onFormSubmit}>
        <div className={styles["form-controls"]}>
          <div className={styles["form-control"]}>
            <label>Username</label>
            <input
              type="text"
              value={props.usernameVal}
              onChange={props.onUsernameStateChange}
            />
          </div>
          <div className={styles["form-control"]}>
            <label>Age (Years)</label>
            <input
              type="text"
              value={props.ageVal}
              onChange={props.onAgeStateChange}
            />
          </div>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default NewUserInfoForm;
