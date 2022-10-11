import { useContext } from "react";
import Kingdom from "../components/kingdom/Kingdom";
import KingdomContainer from "../components/kingdom/KingdomContainer";
import { KingdomContext } from "../utils/context/Kingdom/KingdomContext";

const Dashboard = () => {
  const { kingdom } = useContext(KingdomContext);
  return (
    <section>
      {kingdom.uid ? <Kingdom /> : <KingdomContainer />}
      <div>Alliance</div>
      <div>ARC</div>
      <div>Other resources</div>
    </section>
  );
};
export default Dashboard;
