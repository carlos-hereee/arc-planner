import React, { useContext } from "react";
import { AuthContext } from "../utils/context/Auth/AuthState";

const Account = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  return <div></div>;
};
export default Account;
