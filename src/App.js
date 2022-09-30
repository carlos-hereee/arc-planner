import { Route, Routes } from "react-router-dom";

import Header from "./pages/Header.js";
import Footer from "./pages/Footer.js";
import Homepage from "./pages/Homepage.js";
import Dashboard from "./pages/dashboard.js";
import Alliance from "./pages/alliance";

import { AuthState } from "./utils/context/Auth/AuthState.js";
import { PlayerState } from "./utils/context/Player/PlayerState.js";
import Account from "./pages/Account.js";
import Register from "./components/register.js";
// import { PrivateRoute } from "./utils/privateRoute";

function App() {
  return (
    <div className="App">
      <AuthState>
        <PlayerState>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
            {/* 
            <PrivateRoute path="/dashboard" element={Dashboard} />
            <PrivateRoute path="/alliance" element={Alliance} />
            <PrivateRoute path="/user" element={Profile} /> 
            */}
          </Routes>
          <Footer />
        </PlayerState>
      </AuthState>
    </div>
  );
}

export default App;
