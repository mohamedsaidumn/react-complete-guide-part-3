import React, { useState, Fragment } from "react";
import NewUserInfo from "./components/UserInfo/NewUserInfo/NewUserInfo";
import { UserInfoType } from "./types/types";
import UsersInfoList from "./components/UserInfo/UsersInfoDisplay/UsersInfoList";

const DUMMY_USERS_INFO: UserInfoType[] = [
  {
    id: "e1",
    username: "MohamedSaid",
    age: 31,
  },
  {
    id: "e2",
    username: "Sadiq11",
    age: 26,
  },
];

function App() {
  const [usersInfo, setUsersInfo] = useState(DUMMY_USERS_INFO);

  const postAddNewUserInfoHandler = (userInfo: UserInfoType) => {
    console.log("In App.tsx");
    //console.log(expense);
    setUsersInfo((prevExpenses) => {
      console.log([userInfo, ...prevExpenses]);
      return [userInfo, ...prevExpenses];
    });
  };
  return (
    <Fragment>
      <NewUserInfo onPostAddNewUserInfo={postAddNewUserInfoHandler} />
      <UsersInfoList usersInfo={usersInfo} />
    </Fragment>
  );
}

export default App;
