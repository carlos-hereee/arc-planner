import { useContext, useState } from "react";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import { UserContext } from "../../utils/context/User/UserContext";

const Settings = () => {
  const { leaveKingdom, deleteKingdom } = useContext(KingdomContext);
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);

  return show ? (
    <div className="card">
      <h2>Confirmation</h2>
      <p>
        Are you sure you want to{" "}
        {user.isKing
          ? "delete the kingdom? All progress will be lost!"
          : "leave your kingdom?"}
      </p>
      {user.isKing ? (
        <button
          type="button"
          onClick={deleteKingdom}
          className="btn btn-danger">
          Delete Kingdom
        </button>
      ) : (
        <button type="button" onClick={leaveKingdom} className="btn btn-danger">
          Leave Kingdom
        </button>
      )}
    </div>
  ) : (
    <div className="card">
      <h2>Settings</h2>
      <div>
        {user.isKing && (
          <button type="button" className="btn">
            Edit Kingdom
          </button>
        )}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="btn btn-danger">
          {user.isKing ? "Delete " : "Leave "}Kingdom
        </button>
      </div>
    </div>
  );
};

export default Settings;
