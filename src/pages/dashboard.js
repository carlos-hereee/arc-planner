import { useContext } from "react";
import Alliance from "../components/alliance/Alliance";
import Kingdom from "../components/kingdom/Kingdom";
import KingdomContainer from "../components/kingdom/KingdomContainer";

import { UserContext } from "../utils/context/User/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <section>
      {user.allianceId && <Alliance />}
      {user.kingdomId ? <Kingdom /> : <KingdomContainer />}
    </section>
  );
};
export default Dashboard;
