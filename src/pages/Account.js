import React, { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";

const Account = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  return <div></div>;
};
export default Account;
