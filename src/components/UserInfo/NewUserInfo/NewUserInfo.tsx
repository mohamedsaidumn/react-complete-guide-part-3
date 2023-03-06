import React, { useState, FormEvent, SyntheticEvent } from "react";
//import styles from "./NewUserInfo.module.css";
import { UserInfoType } from "../../../types/types";
import NewUserInfoForm from "./NewUserInfoForm";
import ErrorModal from "../../Modal/ErrorModal";

type propsType = {
  onPostAddNewUserInfo: (userInfo: UserInfoType) => void;
};

type errorType = {
  title: string;
  message: string;
};

enum INPUTS {
  EMPTY = "Please enter a valid username and age (non-empty values)",
  NEGATIVE_AGE = "Please enter a valid  age ( age>0)",
  OK = "OK",
}

const NewUserInfo = (props: propsType) => {
  //States
  const [usernameState, setUsernameState] = useState("");
  const [ageState, setAgeState] = useState("");
  const [error, setError] = useState({
    title: "",
    message: "",
  });

  //Handlers
  const usernameStateChangeHandler = (event: SyntheticEvent) => {
    let target: HTMLInputElement = event.target as HTMLInputElement;
    setUsernameState(target.value);
  };
  const ageStateChangeHandler = (event: SyntheticEvent) => {
    let target: HTMLInputElement = event.target as HTMLInputElement;
    setAgeState(target.value);
  };

  const preAddNewUserInfoHandler = (event: FormEvent) => {
    event.preventDefault();
    const inputType = validateNewUserInfo();

    if (inputType === INPUTS.EMPTY || inputType === INPUTS.NEGATIVE_AGE) {
      //console.log(inputType);
      inputType === INPUTS.NEGATIVE_AGE
        ? setError({
            title: "Invalid age",
            message: "Please enter a valid age (> 0).",
          })
        : setError({
            title: "Invalid input",
            message: "Please enter a valid name and age (non-empty values).",
          });
    }
    setUsernameState("");
    setAgeState("");

    const newUserInfo: UserInfoType = {
      id: Math.random().toString(),
      username: usernameState,
      age: parseInt(ageState),
    };
    props.onPostAddNewUserInfo(newUserInfo);
  };

  //Helper Methods
  const validateNewUserInfo = () => {
    let username: string = usernameState.trim();
    let age: string = ageState.trim();

    if (username.length === 0 || age.length === 0) {
      return INPUTS.EMPTY;
    }

    if (parseInt(age) < 0) {
      return INPUTS.NEGATIVE_AGE;
    }

    return INPUTS.OK;
  };

  const errorHandler = () => {
    setError({
      title: "",
      message: "",
    });
  };

  return (
    <div>
      {error.message !== "" && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <NewUserInfoForm
        usernameVal={usernameState}
        ageVal={ageState}
        onUsernameStateChange={usernameStateChangeHandler}
        onAgeStateChange={ageStateChangeHandler}
        onFormSubmit={preAddNewUserInfoHandler}
      />
    </div>
  );
};

export default NewUserInfo;
