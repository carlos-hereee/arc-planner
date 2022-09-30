import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Icons = ({ name, size }) => {
  const icons = {
    eye: faEye,
    eyeslash: faEyeSlash,
  };
  return <FontAwesomeIcon icon={icons[name]} size={size} />;
};

export default Icons;
