import { useContext } from "react";
import { AuthContext } from "../utils/context/Auth/AuthState";
import RokLogo from "../components/atoms/RokLogo";
import Login from "../components/Login";

const Homepage = ({ history }) => {
  const { accessToken } = useContext(AuthContext);

  if (accessToken) {
    history.push("/user");
  }
  return (
    <section className="homepage">
      <RokLogo />
      <div className="card">
        <h2>ROK Planner</h2>
        <p>
          This is a fanbased application to make Ark Of Osiris team preparation
          easier for player and ARK leaders.
        </p>
        <p>
          Help coordinate with your alliance to let them know your strengths
        </p>
      </div>
      <Login />
    </section>
  );
};
export default Homepage;
