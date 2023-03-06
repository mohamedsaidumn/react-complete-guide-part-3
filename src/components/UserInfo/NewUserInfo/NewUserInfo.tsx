import React, {
  useState,
  FormEvent,
  SyntheticEvent,
  Fragment,
  useRef,
} from "react";
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
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState({
    title: "",
    message: "",
  });

  const preAddNewUserInfoHandler = (event: FormEvent) => {
    event.preventDefault();
    if (
      nameInputRef === null ||
      nameInputRef.current === null ||
      ageInputRef === null ||
      ageInputRef.current === null
    ) {
      return;
    }
    let username: string = nameInputRef.current.value.trim();
    let age: string = ageInputRef.current.value.trim();

    const inputType = validateNewUserInfo(username, age);

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

      return;
    }

    const newUserInfo: UserInfoType = {
      id: Math.random().toString(),
      username: username!,
      age: parseInt(age!),
    };
    props.onPostAddNewUserInfo(newUserInfo);
    nameInputRef.current.value = ""; //This is anti-pattern
    ageInputRef.current.value = "";
  };

  //Helper Methods
  const validateNewUserInfo = (username: string, age: string) => {
    if (username === undefined || age === undefined) {
      return INPUTS.EMPTY;
    }
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
    <Fragment>
      {error.message !== "" && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <NewUserInfoForm
        nameRef={nameInputRef}
        ageRef={ageInputRef}
        onFormSubmit={preAddNewUserInfoHandler}
      />
    </Fragment>
  );
};

export default NewUserInfo;
