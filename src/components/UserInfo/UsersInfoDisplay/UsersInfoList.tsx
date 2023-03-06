import React from "react";
import Card from "../../UI/Card";
import { UserInfoType } from "../../../types/types";
import styles from "./UsersInfoList.module.css";

type propsType = {
  usersInfo: UserInfoType[];
};

const UsersInfoList = (props: propsType) => {
  const usersInfoList = props.usersInfo.map((user) => {
    return (
      <div key={user.id} className={styles["userInfo"]}>
        {user.username} ({user.age} years old)
      </div>
    );
  });
  return <Card className={styles["displayCard"]}>{usersInfoList}</Card>;
};

export default UsersInfoList;
