import { useContext } from "react";
import Kingdom from "../components/kingdom/Kingdom";
import KingdomList from "../components/kingdom/KingdomList";
import { KingdomContext } from "../utils/context/Kingdom/KingdomContext";

const Dashboard = () => {
  const { kingdom } = useContext(KingdomContext);
  return (
    <section>
      {kingdom.uid ? <Kingdom /> : <KingdomList />}
      <div>Alliance</div>
      <div>ARC</div>
      <div>Other resources</div>
    </section>
  );
};
export default Dashboard;
