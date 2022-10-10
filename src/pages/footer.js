import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";

const Footer = () => {
  const { appName } = useContext(AuthContext);
  return (
    <footer>
      <span>
        {appName} © {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
