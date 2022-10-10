import { useContext } from "react";
import { AuthContext } from "../utils/context/AuthContext";
import RokLogo from "../components/atoms/RokLogo";
import { Link } from "react-router-dom";

const Landing = () => {
  const { accessToken } = useContext(AuthContext);

  return (
    <section className="homepage">
      <RokLogo />
      <div className="card">
        <h2>ROK Planner</h2>
        <p>This is a fanbased application</p>
        <p>
          Help coordinate with your alliance to let them know your strengths
        </p>
        {accessToken ? (
          <Link to="/dashboard">
            <button className="btn" type="button">
              Go to Kingdom
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn" type="button">
              Login
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};
export default Landing;
